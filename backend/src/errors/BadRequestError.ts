import AppError from './AppError.js';
import { BAD_REQUEST } from './StatusCode.js';

export default class BadRequestError extends AppError {
  constructor(message:string) {
    super(message, BAD_REQUEST);
  }
}
