import { Router } from "express";
import businessesController from "../controllers/businessesController";
import schemaValidator from "../middlewares/schemaValidator";
import businessesSchema from "../schemas/businessesSchema";

const router = Router();

router.post('/', 
    schemaValidator(businessesSchema), 
    businessesController.createBusinesses
);

router.get('/', 
    businessesController.list
);

router.get('/:id',
    businessesController.getById
);

router.put('/:id',
    businessesController.updateBusinesses
);

router.delete('/:id',
    businessesController.deleteBusinesses
);

export default router;