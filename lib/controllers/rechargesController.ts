import rechargesService from './../services/rechargesService';
import { Request, Response, NextFunction } from 'express'

async function createRecharges(req :Request, res :Response, next :NextFunction){

    const bodyData = req.body;
    const apiKey = res.locals['x-api-key'];
    await rechargesService.createRecharges(apiKey, bodyData);
    res.sendStatus(201);

}

export default {
    createRecharges
}