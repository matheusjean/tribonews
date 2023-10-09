import styled, { css } from 'styled-components'

export const Container = styled.article`
  img {
    max-width: 100%;
  }
  p {
    margin: 2rem 0;
  }
  ul,
  ol {
    margin: 2rem;
  }
  pre {
    ${({ theme }) => css`
      width: 100%;
      overflow-x: auto;
      background: #333;
      color: ${theme.colors.neutral};
      padding: 2.5rem;
      margin: 2.5rem 0;
      line-height: 1.5;
      font-size: 1.8rem;
    `}
  }
`
