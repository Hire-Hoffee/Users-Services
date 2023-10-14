import { Router } from "express";

const router = Router();

router.get("/list", (req, res) => res.send("get users"));
router.post("/create", (req, res) => res.send("create new user"));
router.patch("/update", (req, res) => res.send("update user"));

export { router };
