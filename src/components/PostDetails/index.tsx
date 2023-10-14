/* eslint-disable @typescript-eslint/no-unused-vars */
import { formatDate } from 'utils/format-date'
import { DateFormatado } from '../Date/index'
import { Container } from './styles'

export type PostDetailsProps = {
  date?: any
  author?: string
  category?: string
}

export const PostDetails = ({ author, date, category }: PostDetailsProps) => {
  return (
    <Container>
      Publicado em {formatDate(date)} por {author}
      {category && <span> em {category}</span>}
    </Container>
  )
}
