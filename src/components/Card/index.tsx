import Link from 'next/link'
import React from "react"
import { Image as Img, Author, Box, Category, Text, Time, Title } from './styles'
import Image from 'next/image'

const Card = ({ item: { id, cover, catgeory, title, authorName, time } }) => {
  return (
    <>
      <Box>
        <Img className='img'>
          <Image src={cover} alt={cover.name} layout="fill"/>
        </Img>
        <Text>
          <Category>{catgeory}</Category>
          <Link href={`/SinglePage/${id}`}>
            <Title>{title}</Title>
          </Link>
          <div>
            <Author>by {authorName}</Author>
            <Time>{time}</Time>
          </div>
        </Text>
      </Box>
    </>
  )
}

export default Card
