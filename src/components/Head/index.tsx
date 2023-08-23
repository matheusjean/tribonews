import React from "react"
import * as Style from './styles'
import Image from 'next/image'
import Logo from '../../assets/logo.jpeg'

const Head = () => {
  return (
    <>
      <Style.Container>
        <Style.Wrapper>
          <Style.Logo>
            <Image src={Logo} alt='logo' width='300'/>
          </Style.Logo>
          {/* <div className='ad'>
            <img src='../images/headerb.png' alt='' />
          </div> */}
        </Style.Wrapper>
      </Style.Container>
    </>
  )
}

export default Head
