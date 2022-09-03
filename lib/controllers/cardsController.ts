import cardsService from './../services/cardsService';
import { Request, Response, NextFunction } from 'express';
import errorFactory from './../utils/errorFactory';

async function createCards(req :Request, res :Response, next :NextFunction){

    const bodyData = req.body;
    const apiKey = res.locals['x-api-key'];

    await cardsService.createCards(apiKey, bodyData);
    res.sendStatus(201);

}

async function activateCard(req :Request, res :Response, next :NextFunction){

    const bodyData = req.body;
    await cardsService.activateCard(bodyData);
    res.sendStatus(200);

}

async function blockCard(req :Request, res :Response, next :NextFunction){

    const bodyData = req.body;
    await cardsService.blockCard(bodyData);
    res.sendStatus(200);

}

async function unblockCard(req :Request, res :Response, next :NextFunction){

    const bodyData = req.body;
    await cardsService.unblockCard(bodyData);
    res.sendStatus(200);

}

async function getBalance(req :Request, res :Response, next :NextFunction){

    const { id } = req.params;
    const cardBalance = await cardsService.getBalance(Number(id));
    res.send(cardBalance);

}

export default {
    createCards,
    activateCard,
    getBalance,
    blockCard,
    unblockCard
}