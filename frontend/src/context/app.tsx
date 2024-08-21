import { createContext, useContext, useState } from 'react'

const defaultValues = {}

export const AppContext = createContext(defaultValues)

interface AppProviderProps {
  children: React.ReactNode
}

export const AppContextProvider = (props: AppProviderProps) => {
  const [language, setLanguage] = useState('en')

  const providerValue = {
    language,
    setLanguage,
  }

  return <AppContext.Provider value={providerValue} {...props} />
}

export const useAppState = () => {
  const appContext = useContext(AppContext)

  return appContext
}
