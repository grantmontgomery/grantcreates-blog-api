import express from "express";
import cors from "cors";

const app = express();

app.get("/", (req, res) => res.send("hello world"));

app.use(cors());

app.use(express.json());

app.listen(3001, () => {
  console.log("app is running at port 3001");
});
