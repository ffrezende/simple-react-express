import { IUser } from '../common/interface'
import { useEffect, useState } from 'react'

interface TableProps {
  users: Array<IUser>
}

interface UserProps {
  users: Array<IUser>
}

const Users = (props: UserProps) => {
  const { users } = props

  if (!users?.length) return <tr></tr>

  return users.map((user) => {
    const { name, lastName } = user
    return (
      <tr>
        <td>{name}</td>
        <td>{lastName}</td>
      </tr>
    )
  })
}

const useFilter = () => {
  const [filter, setFilter] = useState('')
  const [dataTable, setDataTable] = useState<Array<IUser>>([])

  const getFilteredList = (users: Array<IUser>) => {
    if (filter) {
      const tableData = users.filter((user) =>
        user.name.toLowerCase().includes(filter.toLowerCase())
      )
      setDataTable(tableData)
    } else {
      setDataTable(users)
    }
  }

  return { setFilter, filter, getFilteredList, dataTable }
}

const Table = ({ users }: TableProps) => {
  const { getFilteredList, setFilter, dataTable, filter } = useFilter()

  const onChangeFilter = (filter: string) => setFilter(filter)

  useEffect(() => {
    getFilteredList(users)
  }, [users, filter])

  return (
    <div>
      <div className=''>
        <input
          type='text'
          id='first_name'
          className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[300px] mt-4 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
          onChange={(e) => onChangeFilter(e.target.value)}
          placeholder='Filter by Name'
        />
      </div>
      <table className='w-full border-collapse'>
        <thead>
          <tr>
            <th className='border border-gray-300 p-2'>Name</th>
            <th className='border border-gray-300 p-2'>Last Name</th>
          </tr>
        </thead>
        <tbody>
          <Users users={dataTable} />
        </tbody>
      </table>
    </div>
  )
}

export default Table
