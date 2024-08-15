import { useEffect, useState } from 'react'
import UserService from '../service/user'
import { IUser } from '../common/interface'

const useUser = () => {
  //we can improve this code using react query hooks -> that return status like isLoading
  const [isLoading, setIsLoading] = useState(true)
  const [users, setUsers] = useState<Array<IUser>>([])
  const { getUser, insertUser } = UserService()

  const getUserList = () => {
    setIsLoading(true)
    getUser()
      .then((users) => {
        setUsers(users)
        setIsLoading(false)
      })
      .catch((error) => {
        console.error('Error fetching users:', error)
      })
  }

  const addUser = async (user: IUser) => {
    return await insertUser(user)
  }

  useEffect(() => {
    getUserList()
  }, [])

  return { isLoading, users, setUsers, getUserList, addUser }
}

export default useUser
