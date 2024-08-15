import { Router } from 'express'
import { UserController } from '../controllers'

const UserRoute = () => {
  const userRouter = Router()
  const userController = new UserController()

  userRouter.get('/users', userController.getUsers)
  userRouter.post('/user', userController.insertUser)

  return userRouter
}

export default UserRoute
