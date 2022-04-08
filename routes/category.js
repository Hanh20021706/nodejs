import { Router } from "express";
import { create, list, read, remove, update } from "../controllers/category";
import { checkAuth } from "../middlewares/checkAuth";


const router = Router();
router.post("/categories",checkAuth ,create);
router.get("/categories",checkAuth ,list);
router.get("/categories/:id",checkAuth ,read);
router.patch("/categories/:id",checkAuth ,update);
router.delete("/categories/:id",checkAuth ,remove);

export default router;