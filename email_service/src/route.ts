import express, { Router, Request, Response } from "express";
import { StatusCodes } from "http-status-codes";

const router: Router = express.Router();

export function healthRoutes(): Router {
  router.get("/email-service-health", (_req: Request, res: Response) => {
    res.status(StatusCodes.OK).send("email service is healthy");
  });
  return router;
}
