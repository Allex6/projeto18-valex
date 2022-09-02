import { Router } from "express";
import companiesController from "../controllers/companiesController";
import schemaValidator from "../middlewares/schemaValidator";
import companiesSchema from "../schemas/companiesSchema";

const router = Router();

router.post('/', 
    schemaValidator(companiesSchema), 
    companiesController.createCompanies
);

router.get('/', 
    companiesController.list
);

router.get('/:id',
    companiesController.getById
);

router.put('/:id',
    companiesController.updateCompanies
);

router.delete('/:id',
    companiesController.deleteCompanies
);

export default router;