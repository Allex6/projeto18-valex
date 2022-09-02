import { Router } from "express";
import rechargesController from "../controllers/rechargesController";
import schemaValidator from "../middlewares/schemaValidator";
import rechargesSchema from "../schemas/rechargesSchema";

const router = Router();

router.post('/', 
    schemaValidator(rechargesSchema), 
    rechargesController.createRecharges
);

router.get('/', 
    rechargesController.list
);

router.get('/:id',
    rechargesController.getById
);

router.put('/:id',
    rechargesController.updateRecharges
);

router.delete('/:id',
    rechargesController.deleteRecharges
);

export default router;