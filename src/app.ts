import bodyParser from "body-parser";
import cors from "cors"
import express from "express";
import path from "path";

import {errorhandler} from "./middleware/errorhandler";
import indexRoute from "./routes/index";
import corsOptions from "./utils/cors";

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
    // mount json form parser
    this.app.use(bodyParser.json());

    // mount query string parser
    this.app.use(bodyParser.urlencoded({ extended: true }));

    // add static paths
    this.app.use(express.static(path.join(__dirname, "public")));

    this.app.use(errorhandler)
    // catch 404 and forward to error handler
    /*this.app.use((req: express.Request, res: express.Response, next: express.NextFunction) => {
      console.log('StatusCode: ' + res.statusCode)
      const e: Error = new Error('Page Not Found!');
      res.status(404);
      next(e);
    });*/

    this.app.use(cors(corsOptions))
  }

  private routes(): void {
    // get router
    let router: express.Router;
    router = express.Router();

    // create routes by routing
    const index: indexRoute.Index = new indexRoute.Index();

    // home page of address /index
    router.get("/", index.index.bind(index.index));

    // instance all routers enable
    this.app.use(router);
  }
}

const server = App.bootstrap();
export default server.app;
