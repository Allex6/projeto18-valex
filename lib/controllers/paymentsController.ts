import paymentsService from './../services/paymentsService';
import { Request, Response, NextFunction } from 'express'

async function createPayments(req :Request, res :Response, next :NextFunction){

    const bodyData = req.body;

    const paymentData = {
        cardId: bodyData.cardId,
        businessId: bodyData.businessId,
        amount: bodyData.amount
    };

    await paymentsService.createPayments(paymentData, bodyData.password);
    res.sendStatus(201);

}

async function createOnlinePayments(req :Request, res :Response, next :NextFunction){

    const bodyData = req.body;

    await paymentsService.createOnlinePayments(bodyData);
    res.sendStatus(201);

}

export default {
    createPayments,
    createOnlinePayments
}