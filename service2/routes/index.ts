import { Router } from "express";
import { createAction, getActions } from "../controllers";

const router = Router();

router.get("/list", getActions);
router.post("/create", createAction);

export { router };
