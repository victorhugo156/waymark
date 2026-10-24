import AppError from './AppError.js';
import { CONFLICT_ERROR } from './StatusCode.js';

export default class ConflictError extends AppError {
  constructor(message = 'Resource already exists') {
    super(message, CONFLICT_ERROR);
  }
}