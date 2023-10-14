import express from "express";
import "dotenv/config";

import { router } from "./routes/index.js";

const app = express();
const PORT = process.env.PORT || 5555;

app.use(express.json());
app.use("/users", router);

app.use((err, req, res, next) => {
  res.status(500);
  res.json({ message: "An error ocurred", error: err });
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
