import { NextFunction, Request, Response } from 'express';
import { HttpError, NotFoundError } from "../utils/error"


export async function errorhandler(req: Request, res: Response, next: NextFunction) {
  try {
    await next()
    
    console.log('statusCode: ' + res.statusCode)
    
    if (res.statusCode && res.statusCode === 404) {
      throw new NotFoundError()
    }
  } catch (err) {
    /* istanbul ignore else */

    // Hey, I know this error
    if (err instanceof HttpError) {
      res.statusCode = err.status

      /*res.body = {
        message: err.message,
        code: err.code,
      }*/
    } /*else {
      // Hmmm, this one is new

      res.statusCode = 500

      res.body = {
        message: 'Internal Server Error',
        code: 'E_SERVER',
      }
    }*/
  }
}
