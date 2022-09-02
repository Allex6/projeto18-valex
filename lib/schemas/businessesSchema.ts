import joi from 'joi';

const businessesSchema = joi.object({
	name: joi.string().required(),
	type: joi.number().required().valid('groceries', 'restaurants', 'transport', 'education', 'health')
});

export default businessesSchema;