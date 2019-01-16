import app from '../src/app'
import supertest from 'supertest'
import * as env from "../src/utils/config";

export const request = supertest(
  app.listen(env.PORT, 
    (err: any) => {
      if (err) {
        return console.log(err);
      }

      return console.log(`server is listening on ${env.PORT}}`);
    }
  )
)