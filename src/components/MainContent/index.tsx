"use client"
import React, { useEffect, useState } from "react"

import Slider from "react-slick"
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Image from 'next/image'
import { AiFillCalendar, AiOutlineComment } from 'react-icons/ai'

import Heading from "../Heading"
import {
  Box, BoxShadow, Category, CategoryLabel, Comment, Container,
  Date as DateStyle, Images, ImagesCover, Label, Text, Title
} from './styles'
import { getNews } from 'services/Requests'
import { DateFormatado } from 'components/Date'
import Link from 'next/link'
import { CarrousselSettings } from 'utils/carrousselSettings'

export default function Popular() {
  const [news, setNews] = useState<News[]>([]);

  useEffect(() => {
    async function fetchData() {
      const response = await getNews();
      const sortedNews = response.slice();
      sortedNews.sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime());
      setNews(sortedNews);
    }
    fetchData();
  }, []);

  return (
    <>
      <Container>
        <Heading title='Popular' />
        <Slider autoplay={false} {...CarrousselSettings}>
          {news.map((val) => (
            <Link
              href={`/news/by-hat/page`}
              as={`/news/by-hat/${val.hat}`}
            >
              <Box key={val.title}>
                <BoxShadow>
                  <Images>
                    <ImagesCover>
                      <Image src={val.image} key={val.id} alt={val.title} layout="fill" />
                    </ImagesCover>
                    <Category>
                      <CategoryLabel>
                        <Link
                          href={`/category/by-category/page`}
                          as={`/category/by-category/${val.categories[0].name}`}
                        >
                          {val.categories[0].name}
                        </Link>
                      </CategoryLabel>
                    </Category>
                  </Images>
                  <Text>
                    <Title>{val.title.slice(0, 63)}...</Title>
                    <DateStyle>
                      <AiFillCalendar />
                      <Label>
                        <DateFormatado date={val.created_at} />
                      </Label>
                    </DateStyle>
                    <Comment>
                      <AiOutlineComment />
                      <Label>0</Label>
                    </Comment>
                  </Text>
                </BoxShadow>
              </Box>
            </Link>
          ))}
        </Slider>
      </Container>
    </>
  )
}
