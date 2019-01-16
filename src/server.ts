import colors from "colors";
import app from "./app";

import "./utils/config";

const port = process.env.PORT || 3000;

app.listen(port,
  (err: any) => {
    if (err) {
      return console.log(err);
    }

    console.log('porta: ' + process.env.PORT)
    return console.log( 
      colors.yellow(`Server is listening on port: `) +
      colors.red(`${port}`) + " - " +
      colors.green("OK!")
    );
  }
);