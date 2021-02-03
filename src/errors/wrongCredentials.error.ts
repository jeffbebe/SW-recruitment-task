import { HttpError } from "./http.error";

export class WrongCredentialsError extends HttpError {
  constructor(message: string) {
    super(message, 400);
  }
}
