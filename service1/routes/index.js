import { Router } from "express";

import { getUsers, createUser, updateUser } from "../controllers/index.js";

const router = Router();

router.get("/list", getUsers);
router.post("/create", createUser);
router.patch("/update", updateUser);

export { router };
