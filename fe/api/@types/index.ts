/* eslint-disable */
export type CreateUserDto = {
  username: string
  password: string
}

export type User = {
  id: number
  username: string
}

export type QueryUserDto = {
  query: string
}

export type UpdateUserDto = {
  username: string
  password: string
}
