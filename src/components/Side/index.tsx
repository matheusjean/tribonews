"use client"
import React from "react"
import "./side.css"
import Slider from "react-slick"
import Heading from "../Heading"
import { gallery } from "../../../data"
// import Tpost from "../Tpost/Tpost"
import SocialMedia from "../Social"

//const allCat = [...new Set(popular.map((curEle) => curEle.category))]
//console.log(allCat)

const Side = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }

  const category = ["Valorant", "LOL", "Counter-Strike", "Cinema", "Notícias", "Comic-con", "Gamescon", "Diablo 4"]
  return (
    <>
      <Heading title='Fique Conectado' />
      <SocialMedia />

      <Heading title='Inscreva-se' />

      <section className='subscribe'>
        <h1 className='title'>Inscreva-se em nosso canal</h1>
        <form action=''>
          <input type='email' placeholder='Email Address...' />
          <button>
            <i className='fa fa-paper-plane'></i> SUBMIT
          </button>
        </form>
      </section>

      <section className='banner'>
        <img src='https://gamearena.gg/wp-content/uploads/2023/08/assassins-creed-codename-red-parece-que-se-lanzara-en-2024.webp' alt='' />
      </section>

      {/* <Tpost /> */}

      <section className='catgorys'>
        <Heading title='Categorias' />
        {/*<div className='items'>{allCat}</div>*/}
        {category.map((val) => {
          return (
            <div className='category category1'>
              <span>{val}</span>
            </div>
          )
        })}
      </section>

      <section className='gallery'>
        <Heading title='Galeria' />
        <Slider {...settings}>
          {gallery.map((val) => {
            return (
              <div className='img'>
                <img src={val.cover} alt='' />
              </div>
            )
          })}
        </Slider>
      </section>
    </>
  )
}

export default Side
