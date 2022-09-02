import { Router } from "express";
import employeesController from "../controllers/employeesController";
import schemaValidator from "../middlewares/schemaValidator";
import employeesSchema from "../schemas/employeesSchema";

const router = Router();

router.post('/', 
    schemaValidator(employeesSchema), 
    employeesController.createEmployees
);

router.get('/', 
    employeesController.list
);

router.get('/:id',
    employeesController.getById
);

router.put('/:id',
    employeesController.updateEmployees
);

router.delete('/:id',
    employeesController.deleteEmployees
);

export default router;