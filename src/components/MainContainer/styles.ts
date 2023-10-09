import styled, { css } from 'styled-components'

export const Container = styled.main`
  ${({ theme }) => css`
    max-width: 96rem;
    font-size: 1.8rem;
    margin: 0 auto;
    padding: 2rem;
  `};
`
