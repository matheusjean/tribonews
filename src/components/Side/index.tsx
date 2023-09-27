"use client"
import React from "react"
import "./side.css"
import Heading from "../Heading"
import { SideAd } from './styles'

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

      <section className='categories'>
        <Heading title='Categorias'/>
        {category.map((val) => {
          return (
            <div key={val} className='category category1'>
              <span>{val}</span>
            </div>
          )
        })}
      </section>
    </>
  )
}

export default Side
