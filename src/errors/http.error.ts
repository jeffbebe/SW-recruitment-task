import { AppError } from "./app.error";

export class HttpError extends AppError {
  status: number;
  constructor(message: string, status: number) {
    super(message);
    this.status = status;
  }
}
