import { createContext, useContext, useState } from 'react'
import { IAuthProvider, IContext } from './types'
import { LoginRequest, setUserLocalStorage } from './util'

export const AuthContext = createContext<IContext>({} as IContext)

export const AuthProvider = ({ children }: IAuthProvider) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [loggedUser, setLoggedUser] = useState<any>()

  async function authenticate(email: string, password: string) {
    const response = await LoginRequest(email, password)

    console.log('ESTOU AQUI authenticate response=>', response)

    if (response) {
      const payload = { token: response?.token, email: response?.email }
      setLoggedUser(payload)
      setUserLocalStorage(payload)
    } else {
      setLoggedUser(null)
      setUserLocalStorage(null)
    }

    console.log('ESTOU AQUI authenticate loggedUser=>', loggedUser)
  }

  function logout() {
    setLoggedUser(null)
    setUserLocalStorage(null)
  }

  return (
    <AuthContext.Provider value={{ loggedUser, authenticate, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuthContext = () => {
  const context = useContext(AuthContext)

  return context
}
