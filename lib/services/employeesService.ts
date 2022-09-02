import employeesRepository from '../repositories/employeesRepository';
import errorFactory from '../utils/errorFactory';

async function createEmployees({ fullName, cpf, email, companyId }){

    await employeesRepository.create({ fullName, cpf, email, companyId });

}

async function getById(id){

    await employeesRepository.getById(id);

}

async function list(){

    await employeesRepository.list();

}

async function updateEmployees(id, { fullName, cpf, email, companyId }){

    await employeesRepository.update(id, { fullName, cpf, email, companyId });

}

async function deleteEmployees(id){

    await employeesRepository.deleteEmployees(id);

}

export default {
    createEmployees,
    getById,
    list,
    updateEmployees,
    deleteEmployees
}