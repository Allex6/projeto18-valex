import postgres from './../databases/postgres';
    
async function create({ employeeId, number, cardHolderName, securityCode, expirationDate, password, isVirtual, originalCardId, isBlocked, type }){

    await postgres.query(`
        INSERT INTO cardss (employeeId, number, cardHolderName, securityCode, expirationDate, password, isVirtual, originalCardId, isBlocked, type)
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)
    `, [employeeId, number, cardHolderName, securityCode, expirationDate, password, isVirtual, originalCardId, isBlocked, type]);

}

async function getById(id){

    return await postgres.query(`
        SELECT * FROM cardss
        WHERE id = $1
        LIMIT 1
    `, [id]);

}

async function list(){

    return await postgres.query(`
        SELECT * FROM cardss
    `);

}

async function update(id, { employeeId, number, cardHolderName, securityCode, expirationDate, password, isVirtual, originalCardId, isBlocked, type }){

    await postgres.query(`
        UPDATE cardss
        SET employeeId = $1,  number = $2,  cardHolderName = $3,  securityCode = $4,  expirationDate = $5,  password = $6,  isVirtual = $7,  originalCardId = $8,  isBlocked = $9,  type = $10
        WHERE id = $10
    `, [employeeId, number, cardHolderName, securityCode, expirationDate, password, isVirtual, originalCardId, isBlocked, type, id]);

}

async function deleteCards(id){

    await postgres.query(`
        DELETE FROM cardss
        WHERE id = $1
    `, [id]);

}

export default {
    create,
    getById,
    list,
    update,
    deleteCards
}