import { Request, Response } from 'express'
import UserService, { IUser } from '../service/user'

export default class UserController {
  getUsers = async (req: Request, res: Response) => {
    try {
      const { getUsers } = UserService()

      const users = await getUsers()

      return res.status(200).json(users)
    } catch (error) {
      console.log(error)
    }
  }

  insertUser = async (req: Request, res: Response) => {
    try {
      console.log(req.body)
      const user = req.body as IUser

      const { insertUser } = UserService()

      const userList = await insertUser(user)

      return res.status(201).json(userList)
    } catch (error) {
      console.log(error)
    }
  }
}
