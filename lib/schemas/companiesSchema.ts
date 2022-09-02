import joi from 'joi';

const companiesSchema = joi.object({
	name: joi.string().required(),
	apiKey: joi.string()
});

export default companiesSchema;