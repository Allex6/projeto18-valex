import { Router } from "express";
import cardsController from "../controllers/cardsController";
import requireApiKey from "../middlewares/requireApiKey";
import schemaValidator from "../middlewares/schemaValidator";
import cardActivationSchema from "../schemas/cardActivationSchema";
import cardsSchema from "../schemas/cardsSchema";
import cardBlockUnblockSchema from './../schemas/cardBlockUnblockSchema';

const router = Router();

router.post('/', 
    schemaValidator(cardsSchema),
    requireApiKey,
    cardsController.createCards
);

router.get('/:id/balance',
    cardsController.getBalance
);

router.put('/activate',
    schemaValidator(cardActivationSchema), 
    cardsController.activateCard
);

router.put('/block',
    schemaValidator(cardBlockUnblockSchema), 
    cardsController.blockCard
);

router.put('/unblock',
    schemaValidator(cardBlockUnblockSchema), 
    cardsController.unblockCard
);

export default router;