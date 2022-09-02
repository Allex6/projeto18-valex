import cardsService from './../services/cardsService';
import { Request, Response, Next${fileExt === 'js' ? '' : ' :NextFunction'}Function } from 'express'

async function createCards(req :Request, res :Response, next :NextFunction){

    const bodyData = req.body;
    await cardsService.createCards(bodyData);
    res.sendStatus(201);

}

async function getById(req :Request, res :Response, next :NextFunction){

    const { id } = req.params;
    const cardsData = await cardsService.getById(id);
    res.send(cardsData);

}

async function list(req :Request, res :Response, next :NextFunction){

    const cardss = await cardsService.list();
    res.send(cardss);

}

async function updateCards(req :Request, res :Response, next :NextFunction){

    const { id } = req.params;
    const bodyData = req.body;
    await cardsService.updateCards(id, bodyData);
    res.sendStatus(200);

}

async function deleteCards(req :Request, res :Response, next :NextFunction){

    const { id } = req.params;
    await cardsService.deleteCards(id);
    res.sendStatus(200);

}

export default {
    createCards,
    getById,
    list,
    updateCards,
    deleteCards
}