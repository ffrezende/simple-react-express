import * as dotenv from 'dotenv'
import expressConfig from './config/express'
import createRoutes from './routes'

const service = async () => {
  dotenv.config()
  const { startServer, serverListener } = expressConfig()

  const app = startServer()

  createRoutes(app)

  serverListener()
}

service()
