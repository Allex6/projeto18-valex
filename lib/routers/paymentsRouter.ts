import { Router } from "express";
import paymentsController from "../controllers/paymentsController";
import schemaValidator from "../middlewares/schemaValidator";
import paymentsSchema from "../schemas/paymentsSchema";

const router = Router();

router.post('/', 
    schemaValidator(paymentsSchema), 
    paymentsController.createPayments
);

router.get('/', 
    paymentsController.list
);

router.get('/:id',
    paymentsController.getById
);

router.put('/:id',
    paymentsController.updatePayments
);

router.delete('/:id',
    paymentsController.deletePayments
);

export default router;