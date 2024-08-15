import { useState } from 'react'

import useUser from './hooks/useUsers'

import Table from './components/table'
import Loading from './components/loading'

function App() {
  const { users, isLoading, setUsers, addUser } = useUser()

  const [name, setName] = useState('')
  const [lastName, setLastName] = useState('')

  const resentInput = () => {
    setName('')
    setLastName('')
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setUsers([...users, { name, lastName }])
    await addUser({ name, lastName })
    resentInput()
  }

  return (
    <div className='flex justify-center items-center'>
      {isLoading ? (
        <Loading />
      ) : (
        <div className='container mx-auto p-4'>
          <form onSubmit={handleSubmit} className='flex flex-col space-y-4'>
            <input
              type='text'
              placeholder='Name'
              value={name}
              onChange={(e) => setName(e.target.value)}
              className='border border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-500'
            />
            <input
              type='text'
              placeholder='Last Name'
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className='border border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-500'
            />
            <button
              type='submit'
              className='bg-blue-500 text-white rounded-md p-2 hover:bg-blue-600'
            >
              Add User
            </button>
          </form>

          <div className='mt-4'>
            <Table users={users} />
          </div>
        </div>
      )}
    </div>
  )
}

export default App
