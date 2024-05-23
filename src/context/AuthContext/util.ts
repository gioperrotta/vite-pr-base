// import { Api } from '../../services/api'
import { IUser } from './types'

export function setUserLocalStorage(user: IUser | null) {
  localStorage.setItem('01-REACT-ROUTER@User', JSON.stringify(user))
}

export function getUserLocalStorage() {
  const json = localStorage.getItem('01-REACT-ROUTER@User')

  if (!json) {
    return null
  }

  const user = JSON.parse(json)
  return user ?? null
}

export async function LoginRequest(email: string, password: string) {
  try {
    // const request = await Api.post('login', { email, password })
    const recivedEmail: string = email
    const recivedPassword: string = password

    const data = {
      email: recivedEmail.length > 0 ? recivedEmail : 'gio@admin.com',
      token:
        recivedPassword.length > 0
          ? recivedPassword
          : 'jfmjfççkmg4444512sdmkjdkj45257132456345612',
    }
    // return request.data
    return data
  } catch (error) {
    return null
  }
}
