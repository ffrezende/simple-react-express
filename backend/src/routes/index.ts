import { Router, Express } from 'express'
import UserRoute from './user'

const createRoutes = (app: Express) => {
  const router = Router()

  app.use(router, UserRoute())
}

export default createRoutes
