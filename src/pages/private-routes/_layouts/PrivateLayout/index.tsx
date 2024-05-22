import { Outlet, Navigate } from 'react-router-dom'
import { Header } from '../../../../components/Header'
import { Footer } from '../../../../components/Footer'

import * as S from './styles'
import { useAuthContext } from '../../../../context/AuthContext'

export function PrivateLayout() {
  const { loggedUser } = useAuthContext()

  return !loggedUser?.token ?
    (<Navigate to="/" />)
    :
    (
      <S.DefaultLayoutConatiner>
        <Header />
        <Outlet />
        <Footer />
      </S.DefaultLayoutConatiner>
    )
}

