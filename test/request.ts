import app from '../src/app'
import supertest from 'supertest'
import "../src/utils/config";

const port = process.env.PORT || 3000;

export const request = supertest(
  app.listen(3000, 
    (err: any) => {
      if (err) {
        return console.log(err);
      }

      return console.log(`server is listening on ${port}}`);
    }
  )
)