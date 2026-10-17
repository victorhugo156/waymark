import AppError from './AppError.js';
import { NOT_FOUND } from './StatusCode.js';

export default class NotFoundError extends AppError {
  constructor(message:string) {
    super(message, NOT_FOUND);
  }
}