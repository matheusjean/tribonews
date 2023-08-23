import { useState } from 'react'

import * as I from '@styled-icons/evaicons-outline'
import { AnimatePresence, motion } from 'framer-motion'
import Link from 'next/link'

import * as S from './styles'

type subElements = {
  path: string
  name: string
}
interface MenuItemsProps {
  title: string
  subElements: subElements[]
}

export default function MenuItems({ title, subElements }: MenuItemsProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const menuAnimation = {
    hidden: {
      opacity: 0,
      height: 0,
      padding: 0,
      transition: { duration: 0.3, when: 'afterChildren' }
    },
    show: {
      opacity: 1,
      height: 'auto',
      transition: {
        duration: 0.3,
        when: 'beforeChildren'
      }
    }
  }
  const menuItemAnimation = {
    hidden: (i: number) => ({
      padding: 0,
      opacity: 0,
      x: '10%',
      transition: {
        duration: (i + 1) * 0.1
      }
    }),
    show: (i: number) => ({
      x: '0%',
      opacity: 1,
      transition: {
        duration: (i + 1) * 0.1
      }
    })
  }
  return (
    <>
      <S.item onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="handle">
        <S.DropdownMenu>
          <S.MenuTitle>{title}</S.MenuTitle>
          <motion.div
            animate={
              isMenuOpen
                ? {
                    rotate: 0
                  }
                : { rotate: -90 }
            }
            id="rotate"
          >
            <I.ArrowIosDownwardOutline color="#fff" size="2.5rem" />
          </motion.div>
        </S.DropdownMenu>
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              variants={menuAnimation}
              initial="hidden"
              animate="show"
              exit="hidden"
              aria-label="menu"
              aria-hidden={isMenuOpen}
            >
              {subElements.map((item, index) => (
                <motion.div
                  variants={menuItemAnimation}
                  key={index}
                  custom={index}
                >
                  <Link href={item.path}>
                    <S.item as={motion.div}>{item.name}</S.item>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </S.item>
    </>
  )
}
