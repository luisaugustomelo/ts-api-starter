import express from "express";

class App {
  public express: express.Application;

  constructor() {
    this.express = express();
    this.mountRoutes();
  }

  private mountRoutes(): void {
    const router = express.Router();
    router.get("/", (req, res) => {
      res.json({
        message: "Hello World!"
      });
    });

    router.get("/home", (req, res) => {
      res.send("Hello World!");
    });

    this.express.use("/", router);
  }
}

export default App;
