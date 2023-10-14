import express from "express";
import "dotenv/config";

const app = express();

const PORT = process.env.PORT || 5555;

app.get("/", (req, res) => {
  res.send("hello world");
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
