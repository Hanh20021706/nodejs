import { Router } from "express";
import {  create, list, read, remove, update } from "../controllers/user";
import { checkAuth } from "../middlewares/checkAuth";
const router = Router();

router.get('/users', checkAuth, list );
router.get('/user/:id', checkAuth, read);
router.post('/users', checkAuth, create);
router.delete('/user/:id', checkAuth, remove);
router.put('/user/:id', checkAuth, update);


export default router;