import { Router } from "express";
import { create, list, read, remove, search, update } from "../controllers/product";
import {userById, UserById} from '../controllers/user';
import { checkAuth, isAdmin, isAuth, requireSignin } from "../middlewares/checkAuth";
const router = Router();


// products
router.get('/products', checkAuth, list);
router.get('/products/:id', read);
// router.post('/products/:userId',requireSignin, isAuth, isAdmin, create);
router.post('/products',checkAuth, create);
router.delete('/products/:id', checkAuth, remove);
router.patch('/products/:id' , update);
router.get('/search', search );
// router.param("userId", userById);

export default router;