import postgres from './../databases/postgres';
    
async function create({ fullName, cpf, email, companyId }){

    await postgres.query(`
        INSERT INTO employeess (fullName, cpf, email, companyId)
        VALUES ($1, $2, $3, $4)
    `, [fullName, cpf, email, companyId]);

}

async function getById(id){

    return await postgres.query(`
        SELECT * FROM employeess
        WHERE id = $1
        LIMIT 1
    `, [id]);

}

async function list(){

    return await postgres.query(`
        SELECT * FROM employeess
    `);

}

async function update(id, { fullName, cpf, email, companyId }){

    await postgres.query(`
        UPDATE employeess
        SET fullName = $1,  cpf = $2,  email = $3,  companyId = $4
        WHERE id = $4
    `, [fullName, cpf, email, companyId, id]);

}

async function deleteEmployees(id){

    await postgres.query(`
        DELETE FROM employeess
        WHERE id = $1
    `, [id]);

}

export default {
    create,
    getById,
    list,
    update,
    deleteEmployees
}