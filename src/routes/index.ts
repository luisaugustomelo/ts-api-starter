"use strict";

import * as express from "express";

namespace Route {

  export class Index {

    public index(
      req: express.Request, 
      res: express.Response, 
      next: express.NextFunction) {
        res.send("Hello World!");
    }
  }
}

export default Route;
