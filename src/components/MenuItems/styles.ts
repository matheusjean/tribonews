'use client'

import styled, { css } from 'styled-components'

export const item = styled.div`
  ${({ theme }) => css`
    padding-left: 2rem;
    color: ${theme.colors.white};
    text-align: start;
  `}
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
