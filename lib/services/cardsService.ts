import cardsRepository from '../repositories/cardsRepository';
import errorFactory from '../utils/errorFactory';

async function createCards({ employeeId, number, cardHolderName, securityCode, expirationDate, password, isVirtual, originalCardId, isBlocked, type }){

    await cardsRepository.create({ employeeId, number, cardHolderName, securityCode, expirationDate, password, isVirtual, originalCardId, isBlocked, type });

}

async function getById(id){

    await cardsRepository.getById(id);

}

async function list(){

    await cardsRepository.list();

}

async function updateCards(id, { employeeId, number, cardHolderName, securityCode, expirationDate, password, isVirtual, originalCardId, isBlocked, type }){

    await cardsRepository.update(id, { employeeId, number, cardHolderName, securityCode, expirationDate, password, isVirtual, originalCardId, isBlocked, type });

}

async function deleteCards(id){

    await cardsRepository.deleteCards(id);

}

export default {
    createCards,
    getById,
    list,
    updateCards,
    deleteCards
}