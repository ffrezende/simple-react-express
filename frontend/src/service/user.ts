import { IUser } from '../common/interface'

const BASE_URL = 'http://127.0.0.1:3000/'

const UserService = () => {
  const getUser = async () => {
    try {
      const response = await fetch(`${BASE_URL}users`)
      const users = await response.json()
      return users
    } catch (error) {
      console.log(error)
    }
  }

  const insertUser = async (user: IUser) => {
    try {
      const postRequest = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      }
      const response = await fetch(`${BASE_URL}user`, postRequest)

      return await response.json()
    } catch (error) {
      console.log(error)
    }
  }

  return { getUser, insertUser }
}

export default UserService
