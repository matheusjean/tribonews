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
.container {
  max-width: 90%;
  margin: auto;
}
.flexSB {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.flex {
  display: flex;
}
.paddingTB {
  padding: 40px 0;
}
.paddingSmall {
  padding: 20px 0;
}
ul {
  list-style-type: none;
}
a {
  text-decoration: none;
}
.category {
  font-size: 12px;
  font-weight: 500;
  text-transform: uppercase;
  color: #fff;
  padding: 5px 10px;
  letter-spacing: 2px;
  background-color: purple;
}
.row {
  width: 50%;
}
.images {
  position: relative;
}
.category1 {
  position: absolute;
  top: 0;
  left: 0;
  border-left: 5px solid #E4672E;
  width: auto;
  display: block;
  background: linear-gradient(to right, #E4672E 50%, black 50%);
  background-size: 200% 100%;
  background-position: right bottom;
  transition: all 0.5s ease-out;
  cursor: pointer;
}
.category1 span {
  color: #fff;
  text-transform: capitalize;
  letter-spacing: 0;
}
.category1:hover {
  background-position: left bottom;
}
.category1 span:hover {
  color: #fff;
}
.title {
  font-weight: 500;
  font-size: 17px;
  margin-bottom: 15px;
}
.comment i,
.date i {
  width: 30px;
  color: #E4672E;
  font-size: 13px;
}

.comment label,
.date label {
  font-size: 13px;
  color: #868585;
  margin-left: 5px;
}
.desc {
  font-size: 13px;
  margin: 10px 0;
}
.shadow {
  box-shadow: rgba(0, 0, 0, 0.2) 0px 15px 10px -10px;
}

/*-----------global-----------*/


`
export default GlobalStyles
