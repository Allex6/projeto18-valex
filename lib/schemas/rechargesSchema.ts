import joi from 'joi';

const rechargesSchema = joi.object({
	cardId: joi.number().required(),
	timestamp: joi.date().timestamp(),
	amount: joi.number().required()
});

export default rechargesSchema;