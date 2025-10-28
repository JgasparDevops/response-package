import { IResponseUtil } from './domain/response.interface'

export const responseUtil = <T>(
  {
    data,
    error
  }: {
    data?: T
    error?: T
  }

): IResponseUtil<T> => {
  const response: Partial<IResponseUtil<T>> = {}

  if (data !== undefined) {
    response.data = data
  }

  if (error !== undefined) {
    response.error = error
  }

  return response as IResponseUtil<T>
}

export { IResponseUtil, ResponseUtil } from './domain/response.interface'