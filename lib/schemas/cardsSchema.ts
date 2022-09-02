import joi from 'joi';

const cardsSchema = joi.object({
	employeeId: joi.number().required(),
	number: joi.string().required(),
	cardHolderName: joi.string().required(),
	securityCode: joi.string().max(3).required(),
	expirationDate: joi.string().max(5).required(),
	password: joi.string(),
	isVirtual: joi.boolean().required(),
	originalCardId: joi.number(),
	isBlocked: joi.boolean().required(),
	type: joi.number().required().valid('groceries', 'restaurants', 'transport', 'education', 'health')
});

export default cardsSchema;