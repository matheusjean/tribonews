import NextLink from 'next/link'

import * as S from './styles'

export interface ILinkProps extends React.HTMLAttributes<Element> {
  children: React.ReactNode
  href: string
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

export default function Link({ children, type, size, href }: ILinkProps) {
  return (
    <NextLink href={href} passHref>
      <S.Link type={type} size={size} href={href}>
        {children}
      </S.Link>
    </NextLink>
  )
}
