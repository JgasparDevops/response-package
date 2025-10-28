export interface IResponseUtil<T> {
  statusCode: number
  data?: T
  error?: T
}

export class ResponseUtil {
  static success<T>(data: T, statusCode: number = 200): IResponseUtil<T> {
    return {
      statusCode,
      data
    }
  }

  static error<T>(error: T, statusCode: number = 500): IResponseUtil<T> {
    return {
      statusCode,
      error
    }
  }
}
