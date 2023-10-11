"use client"
import React from "react"
import Heading from "../Heading"
import { Categories, SideAd, Wrapper } from './styles'

const Side = () => {
  const category = ["Valorant", "LOL", "Counter-Strike", "Cinema",
    "Notícias", "Comic-con", "Gamescon", "Diablo 4"
  ]
  return (
    <>
      <SideAd className='banner'>
        <img alt="bannerAd"
          src='https://gamearena.gg/wp-content/uploads/2023/08/assassins-creed-codename-red-parece-que-se-lanzara-en-2024.webp'
        />
      </SideAd>

      <Wrapper>
        <Heading title='Categorias'/>
        {category.map((val) => {
          return (
            <Categories key={val}>
              <span>{val}</span>
            </Categories>
          )
        })}
      </Wrapper>
    </>
  )
}

export default Side
