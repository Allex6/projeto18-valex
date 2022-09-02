import employeesService from './../services/employeesService';
import { Request, Response, Next${fileExt === 'js' ? '' : ' :NextFunction'}Function } from 'express'

async function createEmployees(req :Request, res :Response, next :NextFunction){

    const bodyData = req.body;
    await employeesService.createEmployees(bodyData);
    res.sendStatus(201);

}

async function getById(req :Request, res :Response, next :NextFunction){

    const { id } = req.params;
    const employeesData = await employeesService.getById(id);
    res.send(employeesData);

}

async function list(req :Request, res :Response, next :NextFunction){

    const employeess = await employeesService.list();
    res.send(employeess);

}

async function updateEmployees(req :Request, res :Response, next :NextFunction){

    const { id } = req.params;
    const bodyData = req.body;
    await employeesService.updateEmployees(id, bodyData);
    res.sendStatus(200);

}

async function deleteEmployees(req :Request, res :Response, next :NextFunction){

    const { id } = req.params;
    await employeesService.deleteEmployees(id);
    res.sendStatus(200);

}

export default {
    createEmployees,
    getById,
    list,
    updateEmployees,
    deleteEmployees
}