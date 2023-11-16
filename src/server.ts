import mongoose from "mongoose";
import app from "./app";
import env from "./util/validateEnv";
import { Server } from "http";

const port = env.PORT;

const server: Server = app.listen(port, () =>
  console.log("Server is in port " + port),
);

mongoose
  .connect(env.MONGO_DB_URI)
  .then(() => {
    console.log("Mongoose connected");
    server;
  })
  .catch(console.error);
