const users: Array<IUser> = [{ name: 'Dev', lastName: 'Fraga' }]

export interface IUser {
  name: string
  lastName: string
}

const UserService = () => {
  const getUsers = async () => {
    return users
  }

  const insertUser = async (user: IUser) => {
    try {
      users.push(user)

      return users
    } catch (error) {
      console.log(error)
    }
  }

  return { getUsers, insertUser }
}

export default UserService
