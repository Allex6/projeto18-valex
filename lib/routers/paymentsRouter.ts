import { Router } from "express";
import paymentsController from "../controllers/paymentsController";
import schemaValidator from "../middlewares/schemaValidator";
import paymentsOnlineSchema from "../schemas/paymentsOnlineSchema";
import paymentsSchema from "../schemas/paymentsSchema";

const router = Router();

router.post('/', 
    schemaValidator(paymentsSchema), 
    paymentsController.createPayments
);

router.post('/online', 
    schemaValidator(paymentsOnlineSchema), 
    paymentsController.createOnlinePayments
);

export default router;