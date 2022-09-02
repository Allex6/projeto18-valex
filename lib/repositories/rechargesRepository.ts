import postgres from './../databases/postgres';
    
async function create({ cardId, timestamp, amount }){

    await postgres.query(`
        INSERT INTO rechargess (cardId, timestamp, amount)
        VALUES ($1, $2, $3)
    `, [cardId, timestamp, amount]);

}

async function getById(id){

    return await postgres.query(`
        SELECT * FROM rechargess
        WHERE id = $1
        LIMIT 1
    `, [id]);

}

async function list(){

    return await postgres.query(`
        SELECT * FROM rechargess
    `);

}

async function update(id, { cardId, timestamp, amount }){

    await postgres.query(`
        UPDATE rechargess
        SET cardId = $1,  timestamp = $2,  amount = $3
        WHERE id = $3
    `, [cardId, timestamp, amount, id]);

}

async function deleteRecharges(id){

    await postgres.query(`
        DELETE FROM rechargess
        WHERE id = $1
    `, [id]);

}

export default {
    create,
    getById,
    list,
    update,
    deleteRecharges
}