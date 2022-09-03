import joi from 'joi';

const cardActivationSchema = joi.object({
	id: joi.number().required(),
	password: joi.string().length(4).pattern(/^[0-9]+$/).required()
});

export default cardActivationSchema;