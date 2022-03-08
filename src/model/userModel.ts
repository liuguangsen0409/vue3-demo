export interface IUser {
  id: number | string
  name: string
  hobbies: Array<string>
  children: Array<IChild>
}

export interface IChild {
  id: number,
  name: string
}