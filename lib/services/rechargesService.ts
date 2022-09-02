import rechargesRepository from '../repositories/rechargesRepository';
import errorFactory from '../utils/errorFactory';

async function createRecharges({ cardId, timestamp, amount }){

    await rechargesRepository.create({ cardId, timestamp, amount });

}

async function getById(id){

    await rechargesRepository.getById(id);

}

async function list(){

    await rechargesRepository.list();

}

async function updateRecharges(id, { cardId, timestamp, amount }){

    await rechargesRepository.update(id, { cardId, timestamp, amount });

}

async function deleteRecharges(id){

    await rechargesRepository.deleteRecharges(id);

}

export default {
    createRecharges,
    getById,
    list,
    updateRecharges,
    deleteRecharges
}