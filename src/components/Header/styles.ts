import styled from 'styled-components'

export const HeaderContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 3rem;
  border-bottom: 2px solid ${(props) => props.theme.green500};

  .menu {
    list-style: none;
    display: flex;
    gap: 2rem;
    a {
      text-decoration: none;
      color: ${(props) => props.theme.gray100};
    }
  }
`
