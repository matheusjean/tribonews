'use client'
import styled from 'styled-components'

export const Container = styled.main`
  display: flex;
  justify-content: space-between;
  margin: 0 60px;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`

export const MainContent = styled.section`
  margin-top: 890px;
  max-width: 75%;
  display: inline;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`

export const SideContent = styled.section`
  margin-top: 890px;
  max-width: 25%;

  h6 {
    background-color: #836fff;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`
