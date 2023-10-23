import Link from 'next/link';
import React from "react";
import { Image as Img, Author, Box, Category, Text, Time, Title } from './styles';
import Image from 'next/image';
import { DateFormatado } from 'components/Date';

const Card = ({ id, cover, category, title, authorName, time, highlightedClass, hat }) => {
  return (
    <>
      <Box className={highlightedClass}>
        <Img>
          <Image src={cover} alt={id} layout="fill" />
        </Img>
        <Text>
          <Category>{category}</Category>
          <Link href={`/news/by-hat/page`}
            as={`/news/by-hat/${hat}`}>
            <Title>{title}</Title>
          </Link>
          <div>
            <Author>by {authorName}</Author>
            <Time>
              <DateFormatado date={time} />
            </Time>
          </div>
        </Text>
      </Box>
    </>
  );
}

export default Card;
