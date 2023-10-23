import styled, { css } from 'styled-components'

export const Image = styled.div`
  ${({ theme }) => css`
    & > span {
      height: 100% !important;
    }
    & > span > img {
      object-fit: cover;
      object-position: top;
    }
  `}
`

export const Box = styled.div`
  position: relative;
  padding: 30px;

  h1 {
    font-size: 15px;
  }

  &.highlighted-1 {
    grid-column-start: 1;
    grid-column-end: 5;
    grid-row-start: 1;
    grid-row-end: 9;

    h1 {
      font-size: 28px;
    }
  }

  &.highlighted-2 {
    grid-column-start: 5;
    grid-column-end: 9;
    grid-row-start: 1;
    grid-row-end: 5;
    h1 {
      margin-top: 5px;
      font-size: 25px;
    }
  }

  &.highlighted-3 {
    grid-column-start: 5;
    grid-column-end: 9;
    grid-row-start: 5;
    grid-row-end: 9;
    h1 {
      margin-top: 5px;
      font-size: 20px;
    }
  }
`

export const Category = styled.span`
  font-size: 12px;
  font-weight: 500;
  text-transform: uppercase;
  color: #fff;
  padding: 5px 10px;
  letter-spacing: 2px;
  background-color: #836fff;
`

export const Text = styled.h1`
  position: absolute;
  bottom: 30px;

  font-weight: 500;
  margin: 10px 0;
  font-size: 15px;
`

export const Author = styled.span`
  font-size: 14px;
  margin-right: 20px;
`

export const Time = styled.span`
  font-size: 15px;
`

export const Title = styled.h1`
  /* font-size: 15px; */
`
