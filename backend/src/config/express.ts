import express from 'express'
import cors from 'cors'

const expressConfig = () => {
  const app = express()

  app.use(express.json())
  app.use(cors())

  const startServer = () => {
    return app
  }

  const serverListener = () => {
    const port = process.env.PORT

    app.listen(port, () => {
      console.log(`Server listening on port ${port}`)
    })
  }

  return { startServer, serverListener }
}

export default expressConfig
