/* eslint-disable @typescript-eslint/no-unused-vars */
import { DateFormatado } from '../Date/index'
import { Container } from './styles'

export type PostDetailsProps = {
  date?: Date
  author?: string
  category?: string
}

export const PostDetails = ({ author, date, category }: PostDetailsProps) => {
  return (
    <Container>
      Publicado em <DateFormatado date={date} /> por {author}
      {category && <span> em {category}</span>}
    </Container>
  )
}
