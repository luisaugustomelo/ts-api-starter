require('dotenv').config()

import app from '../src/app'
import supertest from 'supertest'

export const request = supertest(
  new app().express.listen(process.env.port, 
    (err: any) => {
      if (err) {
        return console.log(err);
      }

      return console.log(`server is listening on ${process.env.port}}`);
    }
  )
)