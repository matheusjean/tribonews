'use client'

import styled, { css, DefaultTheme } from 'styled-components'

type StyledLinkProps = {
  type?:
    | 'social'
    | 'footer'
    | 'outlineAnchor'
    | 'orangeAnchorWithIcon'
    | 'largeOrange'
    | 'outlineAnchorWithIcon'
    | 'login'
  size?: string
}

const linkMapper = {
  social: (theme: DefaultTheme, size: string) => css`
    align-items: center;
    border: 1px solid ${theme.colors.primary};
    border-radius: 50%;
    background: transparent;
    display: flex;
    justify-content: center;
    height: ${size};
    width: ${size};
    @media (min-width: ${theme.screen.large}) {
      width: 20rem;
    }
    @media screen and (min-width: ${theme.screen.huge}) {
      width: 27.4rem;
    }
  `,
  footer: (theme: DefaultTheme) => css`
    color: ${theme.colors.white};
    font-weight: ${theme.font.regular};
    font-size: min(1.4rem, 10vw);
    line-height: 32px;
    text-transform: uppercase;
    text-decoration: none;

    @media screen and (min-width: ${theme.screen.large}) {
      font-size: ${theme.font.sizes.small};
    }
  `,
  outlineAnchor: (theme: DefaultTheme) => css`
    background-color: ${theme.colors.black};
    border: 0.1rem solid ${theme.colors.primary};
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.8rem;
    width: 14rem !important;
    height: 5.6rem !important;
    border-radius: 0.8rem;
    text-decoration: none;
    @media screen and (min-width: ${theme.screen.large}) {
      height: auto;
    }
  `,
  orangeAnchorWithIcon: (theme: DefaultTheme) => css`
    background-color: ${theme.colors.primary};
    color: ${theme.colors.white};
    width: 100%;
    display: flex;
    justify-content: center;
    gap: 1.5rem;
    height: 5.6rem;
    align-items: center;
    border-radius: 0.8rem;
    text-decoration: none;
    text-transform: uppercase;
    font-size: 1.8rem;

    @media screen and (min-width: ${theme.screen.large}) {
      width: 100%;
    }
  `,
  largeOrange: (theme: DefaultTheme) => css`
    background-color: ${theme.colors.primary};
    display: flex;
    justify-content: center;
    gap: 1.5rem;
    align-items: center;
    border-radius: 0.8rem;
    text-decoration: none;
    text-transform: uppercase;
    max-width: 34.7rem;
    width: 100%;
    height: 5.6rem;
    color: ${theme.colors.white};
    font-size: 1.8rem;
    font-weight: ${theme.font.semiBold};
    grid-column: 1/3;
    @media (max-width: ${theme.screen.large}) {
      height: 4rem;
      max-width: 100%;
    }
  `,
  outlineAnchorWithIcon: (theme: DefaultTheme) => css`
    background-color: ${theme.colors.black};
    color: ${theme.colors.primary};
    width: 100%;
    display: flex;
    justify-content: center;
    gap: 1rem;
    height: 3rem;
    align-items: center;
    text-decoration: none;
    border-bottom: 0.1rem solid ${theme.colors.primary};
    font-size: 1.3rem;

    @media screen and (min-width: ${theme.screen.large}) {
      width: 15rem;
    }
  `,
  login: (theme: DefaultTheme) => css`
    background: transparent;
    color: ${theme.colors.white};
    font-size: 1.6rem;
    font-weight: ${theme.font.extraBold};
    text-transform: uppercase;
    text-decoration: none;

    @media (min-width: ${theme.screen.large}) {
      font-size: 1.8rem;
      width: 20rem;
    }
    @media screen and (min-width: ${theme.screen.huge}) {
      width: 27.4rem;
    }
  `
}

export const Link = styled.a<StyledLinkProps>`
  ${({ theme, type, size = '1rem' }) => css`
    font-family: ${theme.font.family};
    font-style: normal;
    font-weight: ${theme.font.bold};
    font-size: ${theme.font.sizes.medium};
    line-height: 32px;
    text-decoration-line: underline;
    color: ${theme.colors.primary};
    text-align: center;

    @media screen and (min-width: ${theme.screen.large}) {
      text-align: left;
    }

    ${!!type && size && linkMapper[type](theme, size)}
  `}
`
