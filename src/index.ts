import express from "express";

const app = express();

app.get("/", (req, res) => res.send("hello world"));

app.listen(3001, () => {
  console.log("app is running at port 3001");
});
