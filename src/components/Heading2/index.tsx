import { Container } from './styles'

export type HeadingProps = {
  children: React.ReactNode
}

export const Heading2 = ({ children }: HeadingProps) => {
  return <Container>{children}</Container>
}
