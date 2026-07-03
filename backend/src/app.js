import dotenv from "dotenv";
dotenv.config();

import express from "express";
import { createServer } from "node:http";
import mongoose from "mongoose";
import cors from "cors";
import cookieParser from "cookie-parser";

import authRoute from "./routes/AuthRoute.js";
import { connectToSocket } from "./controller/socketManager.js";

const app = express();

const server = createServer(app);

connectToSocket(server);

app.use(cors());

app.use(cookieParser());

app.use(express.json({
  limit: "40kb"
}));

app.use(express.urlencoded({
  limit: "40kb",
  extended: true
}));

app.use("/auth", authRoute);

app.set("port", process.env.PORT || 8000);

const start = async () => {
  try {

    const connectionDb = await mongoose.connect(
      "mongodb://zoomix:tejas0707@ac-xibfiy8-shard-00-00.9uijxfa.mongodb.net:27017,ac-xibfiy8-shard-00-01.9uijxfa.mongodb.net:27017,ac-xibfiy8-shard-00-02.9uijxfa.mongodb.net:27017/?ssl=true&replicaSet=atlas-hc7v8m-shard-0&authSource=admin&appName=zoomix"
    );

    console.log(`Mongo connected DB host: ${connectionDb.connection.host}`);

    server.listen(app.get("port"), () => {
      console.log(`Listening on port ${app.get("port")}`);
    });

  } catch (error) {
    console.log(error);
  }
};

start();