import express from "express";
const app = express();
const port = 3333;
app.get("/", (_request, response) => {
  response.send("Hello");
});
app.listen(port, () => {
  console.log("Server On");
});
