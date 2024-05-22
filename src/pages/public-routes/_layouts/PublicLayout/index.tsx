import { Outlet } from 'react-router-dom'

import * as S from './styles'

export function PublicLayout() {
  console.log('ESTOU AQUI PublicDefaultLayout')
  return (
    <S.LayoutContainer>
      <Outlet />
    </S.LayoutContainer>
  )
}
