import joi from 'joi';

const employeesSchema = joi.object({
	fullName: joi.string().required(),
	cpf: joi.string().max(11).required(),
	email: joi.string().max(60).required().email(),
	companyId: joi.number().required()
});

export default employeesSchema;