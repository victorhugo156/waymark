import { NextFunction, Request, Response } from 'express';
import AppError from '../errors/AppError.js';
import {
  BAD_REQUEST,
  INTERNAL_SERVER_ERROR,
} from '../errors/StatusCode.js';

export default function errorHandler(error:any, _req: Request, res: Response, _next: NextFunction) {
  if (error instanceof AppError) {
    return res.status(error.statusCode).json({ message: error.message });
  }

  if (
    error.name === 'ValidationError'
    || error.name === 'CastError'
    || error.status === BAD_REQUEST
  ) {
    return res.status(BAD_REQUEST).json({ message: 'Invalid data supplied' });
  }
  console.log(error)
  return res
    .status(INTERNAL_SERVER_ERROR)
    .json({ message: 'An error has occurred on the server' });
}
