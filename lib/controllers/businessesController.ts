import businessesService from './../services/businessesService';
import { Request, Response, Next${fileExt === 'js' ? '' : ' :NextFunction'}Function } from 'express'

async function createBusinesses(req :Request, res :Response, next :NextFunction){

    const bodyData = req.body;
    await businessesService.createBusinesses(bodyData);
    res.sendStatus(201);

}

async function getById(req :Request, res :Response, next :NextFunction){

    const { id } = req.params;
    const businessesData = await businessesService.getById(id);
    res.send(businessesData);

}

async function list(req :Request, res :Response, next :NextFunction){

    const businessess = await businessesService.list();
    res.send(businessess);

}

async function updateBusinesses(req :Request, res :Response, next :NextFunction){

    const { id } = req.params;
    const bodyData = req.body;
    await businessesService.updateBusinesses(id, bodyData);
    res.sendStatus(200);

}

async function deleteBusinesses(req :Request, res :Response, next :NextFunction){

    const { id } = req.params;
    await businessesService.deleteBusinesses(id);
    res.sendStatus(200);

}

export default {
    createBusinesses,
    getById,
    list,
    updateBusinesses,
    deleteBusinesses
}