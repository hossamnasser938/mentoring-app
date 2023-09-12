import express, { Request, Response } from "express";
const path = require("path");

const app = express();
app.use(express.static(path.resolve(__dirname, "../../client/build")));

const PORT = process.env.PORT || 3001;

app.get("/todos", (req: Request, res: Response) => {
  res.json({ message: "Here is a list of todos" });
});

app.listen(PORT, () => {
  console.log("app is running on port " + PORT);
});
