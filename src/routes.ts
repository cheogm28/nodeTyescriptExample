import express from "express";
import userRouter from "./adaptors/userRouter";
/**
 *  Here is where the app  meets the routes in the system.
 */



 export default function routes(app:express.Express): express.Express{
   process.stdout.write("routers");
   app.use("/api/v1/Users",userRouter);
  return app;
 }