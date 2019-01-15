import app from '../src/app'
import supertest from 'supertest'

export const request = supertest(new app().express.listen(3000, (err: any) => {
    if (err) {
      return console.log(err);
    }

    return console.log(`server is listening on 3000`);
  })
)