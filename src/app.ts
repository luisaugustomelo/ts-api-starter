import * as bodyParser from "body-parser";
import express from "express";
import * as path from "path";

import * as indexRoute from "./routes/index";

class App {

  /**
   * Bootstrap the application.
   *
   * @class Server
   * @method bootstrap
   * @static
   */
  public static bootstrap(): App {
    return new App();
  }
  public app: express.Application;

  /**
   * Constructor.
   *
   * @class Server
   * @constructor
   */
  constructor() {
    // create expressjs application
    this.app = express();

    // configure routes
    this.routes();

    // configure application
    this.config();
  }

  /**
   * Configure application
   *
   * @class Server
   * @method config
   * @return void
   */
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
      res.send("Página não encontrada");
    });
  }

  private routes(): void {
    // get router
    let router: express.Router;
    router = express.Router();

    router.get("/", (req, res) => {
      res.json({
        message: "Hello World!"
      });
    });

    router.get("/home", (req, res) => {
      res.send("Hello! I am a home page!");
    });

    // create routes
    const index: indexRoute.Index = new indexRoute.Index();

    // home page
    router.get("/", index.index.bind(index.index));

    this.app.use(router);
  }
}

const server = App.bootstrap();
export default server.app;
