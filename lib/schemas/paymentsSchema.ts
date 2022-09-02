import joi from 'joi';

const paymentsSchema = joi.object({
	cardId: joi.number().required(),
	businessId: joi.number().required(),
	timestamp: joi.date().timestamp(),
	amount: joi.number().required()
});

export default paymentsSchema;