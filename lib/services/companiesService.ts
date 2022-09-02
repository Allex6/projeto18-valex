import companiesRepository from '../repositories/companiesRepository';
import errorFactory from '../utils/errorFactory';

async function createCompanies({ name, apiKey }){

    await companiesRepository.create({ name, apiKey });

}

async function getById(id){

    await companiesRepository.getById(id);

}

async function list(){

    await companiesRepository.list();

}

async function updateCompanies(id, { name, apiKey }){

    await companiesRepository.update(id, { name, apiKey });

}

async function deleteCompanies(id){

    await companiesRepository.deleteCompanies(id);

}

export default {
    createCompanies,
    getById,
    list,
    updateCompanies,
    deleteCompanies
}