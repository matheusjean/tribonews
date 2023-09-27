'use client'

import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
`

export const Container = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.secondBlack};
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 6rem;
    border-bottom: ${theme.border.primary};
  `}
`
export const Title = styled.span`
  ${({ theme }) => css`
    width: 100%;
    /* margin-right: 100px; */
    font-size: ${theme.font.sizes.xsmall};
    font-weight: ${theme.font.regular};
  `}
`
export const ContentsContainer = styled.div`
  ${({ theme }) => css`
    align-items: center;
    background-color: ${theme.colors.secondBlack};
    display: flex;
    flex-direction: column;
    gap: 30rem;
    height: 100%;
    max-width: 100%;
    align-items: start;
    /* width: 100%; */
    padding: 1.4rem;
    @media screen and (min-width: ${theme.screen.large}) {
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      max-width: 90%;
    }
  `}
`

export const LogoContent = styled.div`
  ${({ theme }) => css`
    width: 20rem;

    @media screen and (min-width: ${theme.screen.large}) {
    }
  `}
`

export const ListContent = styled.div`
  ${({ theme }) => css`
    align-items: center;
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
    text-align: center;
    width: 100%;

    @media screen and (min-width: ${theme.screen.large}) {
      flex-direction: row;
      gap: 2.6rem;
      justify-content: center;
      width: fit-content;

      & li {
        width: fit-content;
      }
    }
  `}
`
export const DivisionContent = styled.div`
  ${({ theme }) => css`
    height: 2.5rem;
    width: 10rem;
    display: flex;
    justify-content: center;
    @media (min-width: ${theme.screen.large}) {
      justify-content: flex-end;
    }
  `}
`
export const DropdownContent = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
`
export const SearchBox = styled.div`
  ${({ theme }) => css`
    border: ${theme.border.gray};
    border-radius: ${theme.border.radius.large};
    padding: ${theme.spacings.xxxsmall};
    @media (max-width: ${theme.screen.large}) {
      margin-left: ${theme.spacings.large};
    }
    > svg {
      cursor: pointer;
    }
  `}
`
export const Input = styled.input`
  ${({ theme }) => css`
  background: transparent;
  color ${theme.colors.white};
  border: none;
  margin-left: ${theme.spacings.xxsmall};
  outline: none;
  width: 80%;
`}
`
export const Icon = styled.div`
  position: absolute;
`
export const Profile = styled.div`
  display: flex;
  align-items: center;
`

export const Web = styled.div`
  ${({ theme }) => css`
    display: flex;
    width: 70%;
    align-items: center;
    justify-content: space-between;
    @media (max-width: ${theme.screen.large}) {
      display: none;
    }
  `}
`
export const Exit = styled.div`
  ${({ theme }) => css`
    margin-left: ${theme.spacings.medium};
    cursor: pointer;
    display: flex;
    align-items: center;
  `}
`
export const Mobile = styled.div`
  ${({ theme }) => css`
    @media (min-width: ${theme.screen.large}) {
      display: none;
    }
  `}
`
export const Hamburguer = styled.svg`
  width: 3rem;
  height: 3rem;
  align-self: center;
`
export const MenuHamburguer = styled.div`
  ${({ theme }) => css`
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    height: 100vh;
    width: 60%;
    z-index: ${theme.layers.overlay};
    box-shadow: -12px 0px 26px 5px rgba(0, 0, 0, 0.6);
    background: ${theme.colors.primary};
  `}
`
export const InsideMenu = styled.div`
  ${({ theme }) => css`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    padding-top: ${theme.spacings.xxlarge};
    z-index: ${theme.layers.overlay};
  `}
`

export const HamburguerIcon = styled.button`
  background-color: transparent;
  z-index: 101;
  position: absolute;
  outline: 0;
  border: none;
  user-select: none;
  top: 2.2rem;
  right: 1.5rem;
  width: 3rem;
  height: 3rem;
`
export const DropdownMenu = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    display: flex;
    align-items: center;
    cursor: pointer;
    user-select: none;
  `}
`

export const MenuTitle = styled.h1``

export const item = styled.div`
  ${({ theme }) => css`
    padding-left: 2rem;
    color: ${theme.colors.white};
    text-align: start;
  `}
`
