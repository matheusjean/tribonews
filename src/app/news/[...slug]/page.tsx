"use client"
import React from 'react';
import { Heading2 } from 'components/Heading2';
import { MainContainer } from 'components/MainContainer';
import { PostContainer } from 'components/PostContainer';
import { PostCover } from 'components/PostCover';
import { PostDetails } from 'components/PostDetails';
import { usePost } from 'context/NewsContext';

export default function Post() {
  const { news } = usePost();

  return (
    <>
      <Heading2>{news?.title}</Heading2>
      <MainContainer>
        <PostCover coverUrl={news?.image} alt={news?.hat} />
        <PostDetails author={news?.author} date={news?.created_at} />
        <PostContainer content={news?.text} />
      </MainContainer>
    </>
  );
}
