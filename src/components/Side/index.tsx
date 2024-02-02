"use client"
import React from "react"
import Heading from "../Heading"
import { Categories, SideAd, Wrapper } from './styles'
import Image from 'next/image'

const Side = () => {

  return (
    <>
      <SideAd className='banner'>
        <Image alt="bannerAd"
          width={300} height={535}
          src='https://maisesports.com.br/_next/image/?url=https%3A%2F%2Felasticbeanstalk-us-east-1-909474674380.s3.amazonaws.com%2Fstrapi-uploads%2F300x600_stake_53335c035f.gif&w=384&q=75'
        />
      </SideAd>

      {/* <Wrapper>
        <Heading title='Categorias'/>
        {category.map((val) => {
          return (
            <Categories key={val}>
              <span>{val}</span>
            </Categories>
          )
        })}
      </Wrapper> */}
    </>
  )
}

export default Side
