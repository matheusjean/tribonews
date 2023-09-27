"use client"

import { useRef, useState } from 'react'
import { useClickAway } from 'react-use'

import * as Ico from '@styled-icons/evaicons-outline'
import Dropdown from 'components/Dropdown'
// import Link from 'components/Link'
import Image from 'next/image'

import Logo from '../../assets/logo.jpeg'

import * as S from './styles'
import Link from 'next/link'

export default function Header() {
  const [, setMenuIsOpen] = useState(false)
  const reference = useRef(null)
  useClickAway(reference, () => {
    setMenuIsOpen(false)
  })
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
          <S.LogoContent aria-label="logo">
            <Link href="/">
              <Image
                data-testid="logoooo"
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
                    <S.Title>Categorias 2</S.Title>
                    <Ico.ArrowIosDownwardOutline color="#fff" size="2.5rem" />
                  </Dropdown>
                </S.DropdownContent>
              </S.DivisionContent>
              <S.DivisionContent>
                <S.DropdownContent>
                  <Dropdown items={categories}>
                    <S.Title>Categorias 3</S.Title>
                    <Ico.ArrowIosDownwardOutline color="#fff" size="2.5rem" />
                  </Dropdown>
                </S.DropdownContent>
              </S.DivisionContent>
            </S.ListContent>
          </S.Web>
        </S.ContentsContainer>
      </S.Container>
    </S.Wrapper>
  )
}
