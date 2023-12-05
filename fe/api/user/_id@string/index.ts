/* eslint-disable */
import type * as Types from '../../@types'

export type Methods = {
  get: {
    status: 200
    resBody: Types.User
  }

  patch: {
    status: 200
    reqBody: Types.UpdateUserDto
  }

  delete: {
    status: 200
  }
}
