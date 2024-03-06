import express, { Express } from "express";
import { bootStrap } from "@emailService/server";
import { healthRoutes } from "./route";
function initialize(): void {
  const app: Express = express();
  app.use(healthRoutes);
  bootStrap(app);
}
initialize();
