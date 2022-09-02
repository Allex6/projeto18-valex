import paymentsService from './../services/paymentsService';
import { Request, Response, Next${fileExt === 'js' ? '' : ' :NextFunction'}Function } from 'express'

async function createPayments(req :Request, res :Response, next :NextFunction){

    const bodyData = req.body;
    await paymentsService.createPayments(bodyData);
    res.sendStatus(201);

}

async function getById(req :Request, res :Response, next :NextFunction){

    const { id } = req.params;
    const paymentsData = await paymentsService.getById(id);
    res.send(paymentsData);

}

async function list(req :Request, res :Response, next :NextFunction){

    const paymentss = await paymentsService.list();
    res.send(paymentss);

}

async function updatePayments(req :Request, res :Response, next :NextFunction){

    const { id } = req.params;
    const bodyData = req.body;
    await paymentsService.updatePayments(id, bodyData);
    res.sendStatus(200);

}

async function deletePayments(req :Request, res :Response, next :NextFunction){

    const { id } = req.params;
    await paymentsService.deletePayments(id);
    res.sendStatus(200);

}

export default {
    createPayments,
    getById,
    list,
    updatePayments,
    deletePayments
}