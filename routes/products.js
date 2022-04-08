import { Router } from "express";
import { create, list, read, remove, update } from "../controllers/product";
import {userById, UserById} from '../controllers/user';
import { checkAuth, isAdmin, isAuth, requireSignin } from "../middlewares/checkAuth";
const router = Router();


// products
router.get('/products', checkAuth, list);
router.get('/product/:id', checkAuth, read);
router.post('/products/:userId',requireSignin, isAuth, isAdmin, create);
router.delete('/product/:id', checkAuth, remove);
router.put('/product/:id' , checkAuth, update);

router.param("userId", userById);

export default router;