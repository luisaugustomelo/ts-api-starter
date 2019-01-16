import * as bodyParser from "body-parser";
import cors from "cors";
import express from "express";
import * as path from "path";

import * as indexRoute from "./routes/index";

class App {
  public app: express.Application;

  constructor() {
    // create expressjs application, configure routes and application
    this.app = express();
    this.routes();
    this.config();
  }

  
  public static bootstrap(): App {
    return new App();
  }

  
  private config(): void {
    // mount logger
    // this.app.use(logger("dev"));

    // mount json form parser
    this.app.use(bodyParser.json());

    // mount query string parser
    this.app.use(bodyParser.urlencoded({ extended: true }));

    // add static paths
    this.app.use(express.static(path.join(__dirname, "public")));

    // catch 404 and forward to error handler
    this.app.use((req: express.Request, res: express.Response, next: express.NextFunction) => {
      res.status(404);
      res.send("Page not found! :-)");
    });
  }

  private routes(): void {
    // get router
    let router: express.Router;
    router = express.Router();

    // options for cors midddleware
    const options: cors.CorsOptions = {
      allowedHeaders: ["Origin", "X-Requested-With", "Content-Type", "Accept", "X-Access-Token"],
      credentials: true,
      methods: "GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE",
      origin: process.env.API_URL || "localhost",
      preflightContinue: false
    };

    // use cors middleware
    router.use(cors(options));

    // write your routes below

    // definition local routes
    router.get("/", (req, res) => {
      res.json({
        message: "Hello World!"
      });
    });

    router.get("/home", (req, res) => {
      res.send("Hello! I am a home page!");
    });

    // create routes by routing
    const index: indexRoute.Index = new indexRoute.Index();

    // home page of address /index
    router.get("/index", index.index.bind(index.index));

    // enable pre-flight
    router.options("*", cors(options));

    // instance all routers enable
    this.app.use(router);
  }
}

const server = App.bootstrap();
export default server.app;
