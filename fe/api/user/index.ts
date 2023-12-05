/* eslint-disable */
import type * as Types from '../@types'

export type Methods = {
  post: {
    status: 201
    reqBody: Types.CreateUserDto
  }

  get: {
    status: 200
    resBody: Types.User[]
  }
}
