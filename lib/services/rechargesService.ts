import { findByApiKey } from '../repositories/companyRepository';
import { RechargeInsertData, insert } from '../repositories/rechargeRepository';
import { findById } from '../repositories/cardRepository';
import errorFactory from '../utils/errorFactory';
import notFound from '../utils/notFound';
import isExpired from './../utils/isExpired';

async function createRecharges(apiKey: string, rechargeData: RechargeInsertData){

    const companyData = await findByApiKey(apiKey);
    if(!companyData) throw notFound('Company');

    const cardData = await findById(rechargeData.cardId);
    if(!cardData) throw notFound('Card');

    if(cardData.isBlocked) throw errorFactory('blocked_card', 'Your card is blocked.');
    if(isExpired(cardData.expirationDate)) throw errorFactory('expired_card', 'Your card has expired.');

    await insert(rechargeData);

}

export default {
    createRecharges
}