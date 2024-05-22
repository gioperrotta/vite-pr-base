import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '../../../context/AuthContext'
import * as S from './styles'

export function Login() {
  const {authenticate} = useAuthContext();

  const navigate = useNavigate();

 async function handleLogin () {
   console.log('ESTOU AQUIIIIIIIIIII')
    try {
      await authenticate('email', 'password')

      navigate('/home')
    } catch (error) {
      
    }

  }
  return (
    <S.Container>
      <h1>Login Page</h1>
      <button onClick={handleLogin}>Login</button>
    </S.Container>
  )
}
