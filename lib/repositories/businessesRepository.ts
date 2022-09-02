import postgres from './../databases/postgres';
    
async function create({ name, type }){

    await postgres.query(`
        INSERT INTO businessess (name, type)
        VALUES ($1, $2)
    `, [name, type]);

}

async function getById(id){

    return await postgres.query(`
        SELECT * FROM businessess
        WHERE id = $1
        LIMIT 1
    `, [id]);

}

async function list(){

    return await postgres.query(`
        SELECT * FROM businessess
    `);

}

async function update(id, { name, type }){

    await postgres.query(`
        UPDATE businessess
        SET name = $1,  type = $2
        WHERE id = $2
    `, [name, type, id]);

}

async function deleteBusinesses(id){

    await postgres.query(`
        DELETE FROM businessess
        WHERE id = $1
    `, [id]);

}

export default {
    create,
    getById,
    list,
    update,
    deleteBusinesses
}