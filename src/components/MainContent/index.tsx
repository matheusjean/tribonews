"use client"
import React from "react"
import "./style.css"

import Slider from "react-slick"
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { popular } from "../../../data"
import Heading from "../Heading"

import { AiFillCalendar, AiOutlineComment } from 'react-icons/ai'

const Popular = () => {
  const settings = {
    className: "center",
    centerMode: false,
    infinite: true,
    centerPadding: '0',
    slidesToShow: 2,
    speed: 500,
    rows: 4,
    slidesPerRow: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          rows: 4,
        },
      },
    ],
  }
  return (
    <>
      <section className='popular'>
        <Heading title='Popular' />
        <div className='content'>
          <Slider autoplay={false} {...settings}>
            {popular.map((val) => (
                <div className='items'>
                  <div className='box shadow'>
                    <div className='images row'>
                      <div className='img'>
                        <img src={val.cover} alt='' />
                      </div>
                      <div className='category category1'>
                        <span>{val.catgeory}</span>
                      </div>
                    </div>
                    <div className='text row'>
                      <h1 className='title'>{val.title.slice(0, 40)}...</h1>
                      <div className='date'>
                        <AiFillCalendar />
                        <label>{val.date}</label>
                      </div>
                      <div className='comment'>
                        <AiOutlineComment/>
                        <label>{val.comments}</label>
                      </div>
                    </div>
                  </div>
                </div>
            ))}
          </Slider>
        </div>
      </section>
    </>
  )
}

export default Popular
