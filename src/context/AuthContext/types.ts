export interface IUser {
  email?: string
  token?: string
}

export interface IContext extends IUser {
  loggedUser: IUser
  authenticate: (email: string, password: string) => Promise<void>
  logout: () => void
}

export interface IAuthProvider {
  children: React.ReactNode
}
