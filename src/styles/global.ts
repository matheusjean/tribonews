'use client'
import { createGlobalStyle, css } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    &::before,
    &::after {
      box-sizing: inherit;
    }
  }

  ${({ theme }) => css`
    //scrollbar configuration
    ::-webkit-scrollbar {
      width: 0.5rem;
      height: 0.5rem;
    }
    ::-webkit-scrollbar-track {
      background: ${theme.colors.secondBlack};
    }

    ::-webkit-scrollbar-thumb {
      background: ${theme.colors.primary};
      border-radius: 1rem;
    }

    html {
      font-size: 62.5%;
      scroll-behavior: smooth;
    }

    body {
      background-color: ${theme.colors.black};
      font-family: ${theme.font.family};
      font-size: ${theme.font.sizes.medium};
      color: ${theme.colors.white};
      height: 100vh;
    }

    img,
    picture,
    video,
    canvas,
    svg {
      display: block;
      max-width: 100%;
    }

    input,
    button,
    textarea,
    select {
      font: inherit;
    }

    p,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      overflow-wrap: break-word;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      overflow-wrap: break-word;
      font-family: ${theme.font.family};
      font-weight: 700;
    }

    #root,
    #__next {
      isolation: isolate;
    }
    .swal2-popup {
      font-size: 2rem !important;
    }
  `}

  .slick-track {
    transition: -webkit-transform 500ms ease 0s !important;
  }
  .slick-slide {
    padding: 0 1rem;
  }
  .slick-slide > div {
    display: flex;
    justify-content: center;
  }

  /*-----------global-----------*/
ul {
  list-style-type: none;
}
a {
  text-decoration: none;
}
/*-----------global-----------*/


`
export default GlobalStyles
