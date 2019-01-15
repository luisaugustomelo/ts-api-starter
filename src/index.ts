require('dotenv').config()

import app from "./app";

const port = process.env.PORT || 3000;

new app().express.listen(port, 
  (err: any) => {
    if (err) {
      return console.log(err);
    }
    
    return console.log(`server is listening on ${port}`);
  }
);
