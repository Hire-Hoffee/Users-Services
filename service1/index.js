import express from "express";
import "dotenv/config";

import { router } from "./routes/index.js";

const app = express();
const PORT = process.env.PORT || 5555;

app.use("/users", router);

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
