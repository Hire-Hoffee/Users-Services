import express from "express";
import "dotenv/config";
import { router } from "./routes";

const app = express();
const PORT = process.env.PORT || 6666;

app.use(express.json());

app.use("/actions", router);

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
