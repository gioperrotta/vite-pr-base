import styled from 'styled-components'

export const FooterContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem 3rem;
  border-top: 2px solid ${(props) => props.theme.green500};
`
