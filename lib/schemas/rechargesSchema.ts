import joi from 'joi';

const rechargesSchema = joi.object({
	cardId: joi.number().required(),
	amount: joi.number().min(1).required()
});

export default rechargesSchema;