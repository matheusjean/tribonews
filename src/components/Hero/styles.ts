import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: repeat(8, 6.6vh);
  grid-gap: 10px;

  @media screen and (max-width: 768px) {
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    grid-template-rows: repeat(18, 6vh);
    grid-gap: 10px;
  }
`

export const Box = styled.div`
  position: relative;

  &:nth-child(1) {
    grid-column-start: 1;
    grid-column-end: 5;
    grid-row-start: 1;
    grid-row-end: 9;

    @media screen and (max-width: 768px) {
      .hero .box:nth-child(1) {
        grid-column-start: 1;
        grid-column-end: 9;
        grid-row-start: 1;
        grid-row-end: 5;
      }
    }
  }

  &:nth-child(2) {
    grid-column-start: 5;
    grid-column-end: 9;
    grid-row-start: 1;
    grid-row-end: 5;

    @media screen and (max-width: 768px) {
      .hero .box:nth-child(2) {
        grid-column-start: 1;
        grid-column-end: 9;
        grid-row-start: 5;
        grid-row-end: 10;
      }
    }
  }

  &:nth-child(3) {
    grid-column-start: 5;
    grid-column-end: 7;
    grid-row-start: 5;
    grid-row-end: 9;

    @media screen and (max-width: 768px) {
      .hero .box:nth-child(3) {
        grid-column-start: 1;
        grid-column-end: 9;
        grid-row-start: 10;
        grid-row-end: 15;
      }
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
  background-color: #e4672e;
`

export const Hero = styled.section`
  margin: -880px 20px;
  max-width: 95%;
  padding-left: 5rem;
  color: #fff;

  img {
    object-fit: cover;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
  }

  a {
    text-decoration: none;
    color: #fff;
  }
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
