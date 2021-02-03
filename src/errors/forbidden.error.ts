import { HttpError } from "./http.error";

export class ForbiddenError extends HttpError {
  constructor(message: string) {
    super(message, 403);
  }
}
