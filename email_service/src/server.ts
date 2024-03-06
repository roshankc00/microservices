import http from "http";
import { Application } from "express";
const SERVER_PORT = 4001;
export function bootStrap(app: Application) {
  try {
    const httpserver: http.Server = new http.Server(app);
    httpserver.listen(SERVER_PORT, () => {
      console.log(` email service is up and running`);
    });
  } catch (error) {
    console.log(error);
  }
}
