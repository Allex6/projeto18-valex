import { findById, Card, findByCardDetails } from '../repositories/cardRepository';
import { findById as findBusinessById } from '../repositories/businessRepository';
import { PaymentInsertData, PaymentWithBusinessName, insert, OnlinePayment } from '../repositories/paymentRepository';
import errorFactory from '../utils/errorFactory';
import notFound from '../utils/notFound';
import isExpired from '../utils/isExpired';
import bcrypt from 'bcrypt';
import getCardBalance from '../utils/getCardBalance';
import Cryptr from 'cryptr';

import dotenv from 'dotenv';
dotenv.config();

const CRYPTR_SECRET = process.env.CRYPTR_SECRET || 'secret';
const cryptr = new Cryptr(CRYPTR_SECRET);

function validateCard(cardData: Card){

    if(cardData.isBlocked) throw errorFactory('blocked_card', 'Your card is blocked.');
    if(isExpired(cardData.expirationDate)) throw errorFactory('expired_card', 'Your card has expired.');

}

async function createPayments(paymentData: PaymentInsertData, cardPassword: string){

    const cardData = await findById(paymentData.cardId);
    if(!cardData) throw notFound('Card');

    const businessData = await findBusinessById(paymentData.businessId);
    if(!businessData) throw notFound('Business');

    if(businessData.type !== cardData.type) throw errorFactory('invalid_type', 'Your card can not be used here.');

    validateCard(cardData);

    if(!cardData.password) throw errorFactory('inactive_card', 'Your card must be activated before you start using it.');

    const correctPassword = await bcrypt.compare(cardPassword, cardData.password);
    if(!correctPassword) throw errorFactory('invalid_password', 'Could not match the specified password.');

    const cardBalance = await getCardBalance(paymentData.cardId);
    if(Number(cardBalance.balance) < paymentData.amount) throw errorFactory('insufficient_balance', 'Your card does not have enough balance to complete this payment.');

    await insert(paymentData);

}

async function createOnlinePayments(paymentData: OnlinePayment){

    const cardData = await findByCardDetails(paymentData.number, paymentData.cardholderName, paymentData.expirationDate);
    if(!cardData) throw notFound('Card');

    const decryptedCVC = cryptr.decrypt(cardData.securityCode);
    if(decryptedCVC !== paymentData.securityCode) throw errorFactory('invalid_security_code', 'Could not match the specified security code.');

    const businessData = await findBusinessById(paymentData.businessId);
    if(!businessData) throw notFound('Business');

    if(businessData.type !== cardData.type) throw errorFactory('invalid_type', 'Your card can not be used here.');

    validateCard(cardData);

    if(!cardData.password) throw errorFactory('inactive_card', 'Your card must be activated before you start using it.');

    const cardBalance = await getCardBalance(cardData.id);
    if(Number(cardBalance.balance) < paymentData.amount) throw errorFactory('insufficient_balance', 'Your card does not have enough balance to complete this payment.');

    await insert({ cardId: cardData.id, businessId: businessData.id, amount: paymentData.amount });

}

export default {
    createPayments,
    createOnlinePayments
}