import express from "express";
import dotenv from "dotenv";
import authRouteHandler from "./routes/authRoutes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8000;

app.use(express.json());

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use("/auth", authRouteHandler);

app.get("/", (_, response) => {
  response.send("working like a charm 😎");
});

app.listen(PORT, () => {
  console.log("listening on port ", PORT);
});
