import { format, formatDistanceToNow, isBefore, subDays } from 'date-fns'
import { Container } from './styles'
import { pt } from 'date-fns/locale'
import { formatDate } from 'utils/format-date'

export type DateProps = {
  date?: Date | any
  dateSlug?: Date | any
}

export const DateFormatado = ({ date, dateSlug }: DateProps) => {
  return (
    <Container>
      {date ? isBefore(subDays(new Date(), 1), new Date(date))
        ? formatDistanceToNow(new Date(date), {
          addSuffix: true,
          locale: pt,
        }).replace('aproximadamente ', '')
        : format(new Date(date), 'dd/MM/yyyy', {
          locale: pt,
        })
      :
      formatDate(dateSlug)
      }
    </Container>
  )
}
