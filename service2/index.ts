import express, { NextFunction, Request, Response } from "express";
import "dotenv/config";
import { router } from "./routes";

const app = express();
const PORT = process.env.PORT || 6666;

app.use(express.json());

app.use("/actions", router);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  res.status(500);
  res.json({ message: "An error ocurred", error: err });
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
