import companiesService from './../services/companiesService';
import { Request, Response, Next${fileExt === 'js' ? '' : ' :NextFunction'}Function } from 'express'

async function createCompanies(req :Request, res :Response, next :NextFunction){

    const bodyData = req.body;
    await companiesService.createCompanies(bodyData);
    res.sendStatus(201);

}

async function getById(req :Request, res :Response, next :NextFunction){

    const { id } = req.params;
    const companiesData = await companiesService.getById(id);
    res.send(companiesData);

}

async function list(req :Request, res :Response, next :NextFunction){

    const companiess = await companiesService.list();
    res.send(companiess);

}

async function updateCompanies(req :Request, res :Response, next :NextFunction){

    const { id } = req.params;
    const bodyData = req.body;
    await companiesService.updateCompanies(id, bodyData);
    res.sendStatus(200);

}

async function deleteCompanies(req :Request, res :Response, next :NextFunction){

    const { id } = req.params;
    await companiesService.deleteCompanies(id);
    res.sendStatus(200);

}

export default {
    createCompanies,
    getById,
    list,
    updateCompanies,
    deleteCompanies
}