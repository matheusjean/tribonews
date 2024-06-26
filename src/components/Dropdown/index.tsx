import { useRef, useState } from 'react'
import { useClickAway } from 'react-use'

import * as S from './styles'
import Link from 'next/link'
type itemsProps = {
  icon?: JSX.Element
  path: string
  name: string
}

interface DropdownItemProps extends React.HTMLAttributes<Element> {
  title?: string
  items: itemsProps[]
  size?: 'default' | 'large'
  isopen: boolean
  children?: React.ReactNode
}

const DropdownItem = ({ items, title, size, isopen }: DropdownItemProps) => {
  return (
    <>
      <S.DropdownList
        width={size}
        isopen={isopen}
        aria-label="list"
        aria-hidden={!isopen}
      >
        <S.Title>{title}</S.Title>
        {items.map((item, index) => (
          <Link href={item.path} key={index}>
            <S.DropdownItem>
              {item.icon && <S.Icon>{item.icon}</S.Icon>}
              <S.Text>{item.name}</S.Text>
            </S.DropdownItem>
          </Link>
        ))}
      </S.DropdownList>
    </>
  )
}
interface DropdownProps extends React.HTMLAttributes<Element> {
  children?: React.ReactNode
  title?: string
  items: itemsProps[]
  size?: 'default' | 'large'
}

export default function Dropdown({
  children,
  title,
  items,
  size = 'default',
}: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false)
  const reference = useRef(null)
  useClickAway(reference, () => {
    setIsOpen(false)
  })
  return (
    <S.Container ref={reference} aria-label="menu">
      <S.Item onClick={() => setIsOpen(!isOpen)} aria-label="handle">
        {children}
      </S.Item>
      <DropdownItem size={size} isopen={isOpen} title={title} items={items} />
    </S.Container>
  )
}
