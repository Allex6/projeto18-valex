import joi from 'joi';

const cardsSchema = joi.object({
	employeeId: joi.number().required(),
	isVirtual: joi.boolean(),
	originalCardId: joi.number(),
	type: joi.number().required().valid('groceries', 'restaurant', 'transport', 'education', 'health')
});

export default cardsSchema;