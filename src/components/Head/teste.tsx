"use client"
import React, { useState } from "react"
// import { Link } from "react-router-dom"
import { Button, Container, Header, Li, Navbar, Ul } from './styless'
import Link from 'next/link'
import Image from 'next/image'
import Logo from '../../assets/logo.jpeg'

const Headers = () => {
  const [navbar, setNavbar] = useState(false)

  return (
    <>
      <Header>
        <Container className='container paddingSmall'>
          <Navbar>
            <Ul>
              <Li>
                <Image src={Logo} alt='logo' width='100'/>
              </Li>
              <Li>
                <Link href='/'>Home</Link>
              </Li>
              <Li>
                <Link href='/'>Culture</Link>
              </Li>
              <Li>
                <Link href='/'>Politics</Link>
              </Li>
              <Li>
                <Link href='/'>Memes</Link>
              </Li>
              <Li>
                <Link href='/'>Sports</Link>
              </Li>
              <Li>
                <Link href='/'>Boxed</Link>
              </Li>
              <Li>
                <Link href='/'>Reviews</Link>
              </Li>
            </Ul>
            <Button>
              Botão
            </Button>
          </Navbar>
        </Container>
      </Header>
    </>
  )
}

export default Headers
