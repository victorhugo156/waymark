import AppError from './AppError.js';
import { FORBIDDEN } from './StatusCode.js';

export default class Forbidden extends AppError {
  constructor(message = 'Forbidden') {
    super(message, FORBIDDEN);
  }
}