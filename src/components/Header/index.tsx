import { NavLink } from 'react-router-dom'
import * as S from './styles'
import { useAuthContext } from '../../context/AuthContext'

export function Header() {
  const { logout } = useAuthContext()

  return (
    <S.HeaderContainer>
      <h1>Header</h1>
      <nav className="menu">
        <NavLink to="/home" >Home</NavLink>
        <NavLink to="/about" state={'This is state from ABOUT'}>About</NavLink>
        <NavLink to="/posts">Posts</NavLink>
        <NavLink to="/posts/10">Posts=10</NavLink>

        <NavLink to="/redirect">Redirect</NavLink>

        <NavLink onClick={logout } to="/">Sair</NavLink>

      </nav>
    </S.HeaderContainer>
  )
}
