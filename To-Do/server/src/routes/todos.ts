import { Router } from "express";
import * as todoCtrl from "../controllers/todoController";

const router = Router();
router.get("/", todoCtrl.getTodos);
router.post("/",todoCtrl.create);
router.patch("/:id/toggle", todoCtrl.toggle);
router.delete("/:id", todoCtrl.remove);

export default router;