'use client'

import styled, { css } from 'styled-components'

export const Container = styled.div``

export const Title = styled.h1`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xsmall};
    align-self: self-start;
    color: ${theme.colors.primary};
  `}
`

export const Item = styled.div`
  display: flex;
  align-items: center;
  margin-right: 200px;
  user-select: none;
  cursor: pointer;
`
type DropdownListProps = {
  width?: 'default' | 'large'
  isOpen: boolean
}

export const DropdownList = styled.div<DropdownListProps>`
  ${({ theme, width, isOpen }) => css`
    position: absolute;
    top: 6rem;
    right: 0;
    background-color: ${theme.colors.secondBlack};
    justify-content: center;
    width: ${width === 'large' ? '26rem' : '20rem'};
    border: ${theme.border.white};
    border-radius: ${theme.border.radius.small};
    z-index: ${theme.layers.menu};
    flex-direction: column;
    align-items: center;
    padding: 1rem;
    cursor: pointer;
    display: ${isOpen ? 'flex' : 'none'};
    opacity: ${isOpen ? 1 : 0};

    &:before {
      position: absolute;
      content: '';
      border-top: ${theme.border.white};
      border-left: ${theme.border.white};
      background-color: ${theme.colors.secondBlack};
      height: 0.5rem;
      width: 0.5rem;
      background:;
      right: 0.8rem;
      top: -0.33rem;
      transform: rotate(45deg);
    }
    a {
      display: flex;
      align-items: center;
      width: 100%;
      height: 3.5rem;
      border-bottom: 1px solid #ffffff26;
      transition: 0.2s;
      padding-left: 1rem;
      display: flex;
      align-items: center;
      color: ${theme.colors.white};
      text-decoration: none;
      &:hover {
        border-bottom: ${theme.border.white};
      }
    }
  `}
`
export const DropdownItem = styled.div`
  display: flex;
  align-items: center;
  padding-left: 1rem;
`

export const Icon = styled.svg`
  flex: none;
  width: 2rem;
  height: 2rem;
  margin-right: 1rem;
`
export const Text = styled.h1`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    text-decoration: none;
    font-size: ${theme.font.sizes.xsmall};
    font-weight: ${theme.font.semiBold};
    text-transform: uppercase;
  `}
`
