import { Router } from "express";
import rechargesController from "../controllers/rechargesController";
import requireApiKey from "../middlewares/requireApiKey";
import schemaValidator from "../middlewares/schemaValidator";
import rechargesSchema from "../schemas/rechargesSchema";

const router = Router();

router.post('/', 
    schemaValidator(rechargesSchema), 
    requireApiKey,
    rechargesController.createRecharges
);

export default router;