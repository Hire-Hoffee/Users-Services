import { Router } from "express";

const router = Router();

router.get("/list", (req, res) => res.send("list"));
router.post("/create", (req, res) => res.send("create"));

export { router };
