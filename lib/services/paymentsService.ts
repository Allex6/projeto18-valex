import paymentsRepository from '../repositories/paymentsRepository';
import errorFactory from '../utils/errorFactory';

async function createPayments({ cardId, businessId, timestamp, amount }){

    await paymentsRepository.create({ cardId, businessId, timestamp, amount });

}

async function getById(id){

    await paymentsRepository.getById(id);

}

async function list(){

    await paymentsRepository.list();

}

async function updatePayments(id, { cardId, businessId, timestamp, amount }){

    await paymentsRepository.update(id, { cardId, businessId, timestamp, amount });

}

async function deletePayments(id){

    await paymentsRepository.deletePayments(id);

}

export default {
    createPayments,
    getById,
    list,
    updatePayments,
    deletePayments
}