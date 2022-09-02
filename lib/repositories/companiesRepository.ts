import postgres from './../databases/postgres';
    
async function create({ name, apiKey }){

    await postgres.query(`
        INSERT INTO companiess (name, apiKey)
        VALUES ($1, $2)
    `, [name, apiKey]);

}

async function getById(id){

    return await postgres.query(`
        SELECT * FROM companiess
        WHERE id = $1
        LIMIT 1
    `, [id]);

}

async function list(){

    return await postgres.query(`
        SELECT * FROM companiess
    `);

}

async function update(id, { name, apiKey }){

    await postgres.query(`
        UPDATE companiess
        SET name = $1,  apiKey = $2
        WHERE id = $2
    `, [name, apiKey, id]);

}

async function deleteCompanies(id){

    await postgres.query(`
        DELETE FROM companiess
        WHERE id = $1
    `, [id]);

}

export default {
    create,
    getById,
    list,
    update,
    deleteCompanies
}