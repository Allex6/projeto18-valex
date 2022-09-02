import postgres from './../databases/postgres';
    
async function create({ cardId, businessId, timestamp, amount }){

    await postgres.query(`
        INSERT INTO paymentss (cardId, businessId, timestamp, amount)
        VALUES ($1, $2, $3, $4)
    `, [cardId, businessId, timestamp, amount]);

}

async function getById(id){

    return await postgres.query(`
        SELECT * FROM paymentss
        WHERE id = $1
        LIMIT 1
    `, [id]);

}

async function list(){

    return await postgres.query(`
        SELECT * FROM paymentss
    `);

}

async function update(id, { cardId, businessId, timestamp, amount }){

    await postgres.query(`
        UPDATE paymentss
        SET cardId = $1,  businessId = $2,  timestamp = $3,  amount = $4
        WHERE id = $4
    `, [cardId, businessId, timestamp, amount, id]);

}

async function deletePayments(id){

    await postgres.query(`
        DELETE FROM paymentss
        WHERE id = $1
    `, [id]);

}

export default {
    create,
    getById,
    list,
    update,
    deletePayments
}