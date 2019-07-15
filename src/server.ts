import colors from "colors";
import app from "./app";

import "./utils/config";

const port = process.env.PORT || 3000;

app.listen(3000,
  (err: any) => {
    if (err) {
      return console.log(err);
    }

    return console.log(
      `${colors.yellow('Server is listening on port: ') + colors.red(`${port} - `) + colors.green("OK!")}`
    );
  }
);