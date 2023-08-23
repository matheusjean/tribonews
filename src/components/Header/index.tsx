"use client"

import { useRef, useState } from 'react'
import { useClickAway } from 'react-use'

import * as I from '@styled-icons/boxicons-regular'
import { Menu } from '@styled-icons/entypo/Menu'
import * as Ico from '@styled-icons/evaicons-outline'
import { Certificate } from '@styled-icons/fluentui-system-regular/Certificate'
import { Exit } from '@styled-icons/ionicons-outline/Exit'
import Dropdown from 'components/Dropdown'
import Link from 'components/Link'
import MenuItems from 'components/MenuItems'
import { motion } from 'framer-motion'
import Image from 'next/image'

import Logo from '../../assets/logo.jpeg'

import * as S from './styles'

export default function Header() {
  // const routes = useRouter()

  const [menuIsOpen, setMenuIsOpen] = useState(false)
  const variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: '100%' }
  }
  const reference = useRef(null)
  useClickAway(reference, () => {
    setMenuIsOpen(false)
  })
  const subElement = [
    { path: '/categories/1', name: 'primeiro' },
    { path: '/categories/2', name: 'segundo' },
    { path: '/categories/3', name: 'terceiro' }
  ]
  const account = [
    {
      icon: <I.Heart size="2rem" />,
      path: '/favorites',
      name: 'Favoritos'
    },
    {
      icon: <Certificate size="2rem" />,
      path: '/certificates',
      name: 'Certificados'
    },
    {
      icon: <I.EditAlt size="2rem" />,
      path: '/myAccount',
      name: 'Editar Perfil'
    }
  ]
  const categories = [
    { path: '/categories/1', name: 'primeiro' },
    { path: '/categories/2', name: 'segundo' },
    { path: '/categories/3', name: 'terceiro' },
    { path: '/categories', name: 'ver todas' }
  ]

  return (
    <S.Wrapper>
      <S.Container>
        <S.ContentsContainer>
          <S.LogoContent aria-label="sjt logo">
            <Link href="/home">
              <Image
                data-testid="logo"
                src={Logo}
                // layout="responsive"
                objectFit="cover"
                height={50}
                width={200}
                alt="logo"
              />
            </Link>
          </S.LogoContent>
          <S.Web>
            <S.ListContent>
              <S.DivisionContent>
                <S.DropdownContent>
                  <Dropdown items={categories}>
                    <S.Title>Categorias</S.Title>
                    <Ico.ArrowIosDownwardOutline color="#fff" size="2.5rem" />
                  </Dropdown>
                </S.DropdownContent>
              </S.DivisionContent>
              <S.DivisionContent>
                <S.DropdownContent>
                  <Dropdown items={categories}>
                    <S.Title>Categorias2</S.Title>
                    <Ico.ArrowIosDownwardOutline color="#fff" size="2.5rem" />
                  </Dropdown>
                </S.DropdownContent>
              </S.DivisionContent>
              <S.DivisionContent>
                <S.DropdownContent>
                  <Dropdown items={categories}>
                    <S.Title>Categorias3</S.Title>
                    <Ico.ArrowIosDownwardOutline color="#fff" size="2.5rem" />
                  </Dropdown>
                </S.DropdownContent>
              </S.DivisionContent>
              <S.DivisionContent>
                <S.DropdownContent>
                  <Dropdown items={account}>
                    <S.Title>Categorias4</S.Title>
                    <Ico.ArrowIosDownwardOutline color="#fff" size="2.5rem" />
                  </Dropdown>
                </S.DropdownContent>
              </S.DivisionContent>
            </S.ListContent>
          </S.Web>
        </S.ContentsContainer>
        <S.Mobile>
          <S.MenuHamburguer
            ref={reference}
            as={motion.nav}
            initial={'closed'}
            animate={menuIsOpen ? 'open' : 'closed'}
            variants={variants}
            transition={{ duration: 0.5 }}
            aria-hidden={!menuIsOpen}
          >
            <S.InsideMenu as={motion.div}>
              <MenuItems title="Categorias" subElements={subElement} />
              <MenuItems title="Minha Conta" subElements={account} />
              <MenuItems title="Perfil" subElements={subElement} />
            </S.InsideMenu>
          </S.MenuHamburguer>

          <S.HamburguerIcon
            as={motion.button}
            onClick={() => setMenuIsOpen(!menuIsOpen)}
            aria-label="Handle Menu"
          >
            {menuIsOpen ? (
              <Ico.CloseOutline size="3rem" color="#fff" />
            ) : (
              <Menu size="3rem" color="#E4672E" />
            )}
          </S.HamburguerIcon>
        </S.Mobile>
      </S.Container>
    </S.Wrapper>
  )
}
