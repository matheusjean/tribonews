"use client"
import React from "react"

import Slider from "react-slick"
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Image from 'next/image'
import { AiFillCalendar, AiOutlineComment } from 'react-icons/ai'

import { popular } from "../../../data"
import Heading from "../Heading"
import { Box, BoxShadow, Category, CategoryLabel, Comment, Date, Images, ImagesCover, Label, Text, Title } from './styles'

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
                <Box>
                  <BoxShadow>
                    <Images>
                      <ImagesCover>
                        <Image src={val.cover} alt='' layout="fill"/>
                      </ImagesCover>
                      <Category>
                        <CategoryLabel>{val.catgeory}</CategoryLabel>
                      </Category>
                    </Images>
                    <Text>
                      <Title>{val.title.slice(0, 51)}...</Title>
                      <Date>
                        <AiFillCalendar />
                        <Label>{val.date}</Label>
                      </Date>
                      <Comment>
                        <AiOutlineComment/>
                        <Label>{val.comments}</Label>
                      </Comment>
                    </Text>
                  </BoxShadow>
                </Box>
            ))}
          </Slider>
        </div>
      </section>
    </>
  )
}

export default Popular
