import { Router } from "express";
import cardsController from "../controllers/cardsController";
import schemaValidator from "../middlewares/schemaValidator";
import cardsSchema from "../schemas/cardsSchema";

const router = Router();

router.post('/', 
    schemaValidator(cardsSchema), 
    cardsController.createCards
);

router.get('/', 
    cardsController.list
);

router.get('/:id',
    cardsController.getById
);

router.put('/:id',
    cardsController.updateCards
);

router.delete('/:id',
    cardsController.deleteCards
);

export default router;