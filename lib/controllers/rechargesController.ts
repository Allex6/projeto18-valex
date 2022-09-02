import rechargesService from './../services/rechargesService';
import { Request, Response, Next${fileExt === 'js' ? '' : ' :NextFunction'}Function } from 'express'

async function createRecharges(req :Request, res :Response, next :NextFunction){

    const bodyData = req.body;
    await rechargesService.createRecharges(bodyData);
    res.sendStatus(201);

}

async function getById(req :Request, res :Response, next :NextFunction){

    const { id } = req.params;
    const rechargesData = await rechargesService.getById(id);
    res.send(rechargesData);

}

async function list(req :Request, res :Response, next :NextFunction){

    const rechargess = await rechargesService.list();
    res.send(rechargess);

}

async function updateRecharges(req :Request, res :Response, next :NextFunction){

    const { id } = req.params;
    const bodyData = req.body;
    await rechargesService.updateRecharges(id, bodyData);
    res.sendStatus(200);

}

async function deleteRecharges(req :Request, res :Response, next :NextFunction){

    const { id } = req.params;
    await rechargesService.deleteRecharges(id);
    res.sendStatus(200);

}

export default {
    createRecharges,
    getById,
    list,
    updateRecharges,
    deleteRecharges
}