import Link from 'next/link'
import React from "react"
import { Image as Img, Author, Box, Category, Text, Time, Title } from './styles'
import Image from 'next/image'

const Card = ({ item: { id, cover, category, title, authorName, time } }) => {
  return (
    <>
      <Box>
        <Img>
          <Image src={cover} alt={cover.name} layout="fill"/>
        </Img>
        <Text>
          <Category>{category}</Category>
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
