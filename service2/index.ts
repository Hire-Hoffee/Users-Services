import express from "express";
import "dotenv/config";

const app = express();
const PORT = process.env.PORT || 6666;

app.use(express.json());

app.use("/", (req, res) => {
  res.send("hello");
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
