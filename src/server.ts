import colors from "colors";
import app from "./app";
import * as env from "./utils/config";

const port = env.PORT || 3000;

app.listen(port,
  (err: any) => {
    if (err) {
      return console.log(err);
    }

    return console.log( colors.yellow(`Server is listening on port: `) +
                        colors.red(`${port}`) + " - " +
                        colors.green("OK!")
                      );
  }
);
