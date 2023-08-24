import Link from 'next/link'
import React from "react"
import { Author, Box, Category, Text, Time } from './styles'

const Card = ({ item: { id, cover, catgeory, title, authorName, time } }) => {
  return (
    <>
      <Box>
        <div className='img'>
          <img src={cover} alt='' />
        </div>
        <Text>
          <Category>{catgeory}</Category>
          <Link href={`/SinglePage/${id}`}>
            <h1 className='titleBg'>{title}</h1>
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
