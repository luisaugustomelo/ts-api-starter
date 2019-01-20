//import { HttpError, NotFoundError } from "../error"
import { Request, Response, NextFunction } from 'express';
import colors from 'colors'

function notFound(req: Request, res: Response, next: NextFunction) {
  res.status(404)

  res.send({
    status: 404,
    success: false,
    message: 'Resource not found'
  })
}

function validationError(err: any,req: Request, res: Response, next: NextFunction) {
  let { status, message } = err

  if (!message) message = 'Validation Error'

  if (!status || status !== 422) {
    return next(err)
  } else {
    res.status(status)
    res.send({ status, message, success: false })
  }
}

function unauthorizedError(err: any, req: Request, res: Response, next: NextFunction) {
  let { status, message } = err

  if (!message) message = 'Unauthorized'

  if (!status || status !== 401) {
    return next(err)
  } else {
    res.status(status)
    res.send({ status, message, success: false })
  }
}

function forbiddenError(err: any, req: Request, res: Response, next: NextFunction) {
  let { status, message } = err

  if (!message) message = 'Forbidden'

  if (!status || status !== 403) {
    return next(err)
  } else {
    res.status(status)
    res.send({ status, message, success: false })
  }
}

function serverError(err: any, req: Request, res: Response, next: NextFunction) {
  console.log(`
  ${colors.blue('✖️  ✖️  ✖️  Something went wrong:  ✖️  ✖️  ✖️')}
  ${colors.bgBlue(err.stack)}
  ${colors.blue('✖️  ✖️  ✖️')}
  `)

  res.status(500)
  res.send('Internal server error')
}

export default {
  notFound,
  serverError,
  forbiddenError,
  validationError,
  unauthorizedError
}
