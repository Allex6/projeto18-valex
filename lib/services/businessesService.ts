import businessesRepository from '../repositories/businessesRepository';
import errorFactory from '../utils/errorFactory';

async function createBusinesses({ name, type }){

    await businessesRepository.create({ name, type });

}

async function getById(id){

    await businessesRepository.getById(id);

}

async function list(){

    await businessesRepository.list();

}

async function updateBusinesses(id, { name, type }){

    await businessesRepository.update(id, { name, type });

}

async function deleteBusinesses(id){

    await businessesRepository.deleteBusinesses(id);

}

export default {
    createBusinesses,
    getById,
    list,
    updateBusinesses,
    deleteBusinesses
}