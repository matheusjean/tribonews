"use client"
import React from 'react';
import { Heading2 } from 'components/Heading2';
import { MainContainer } from 'components/MainContainer';
import { PostContainer } from 'components/PostContainer';
import { PostCover } from 'components/PostCover';
import { PostDetails } from 'components/PostDetails';
import { useCategoryPost } from 'context/CategoryContext';

export default function Post() {
  const { catName } = useCategoryPost();

  return (
    <>
      {catName?.map((category) => (
        <div key={category.id}>
          <Heading2>{category?.title}</Heading2>
          <MainContainer>
            <PostCover coverUrl={category?.image} alt={category?.hat} />
            <PostDetails author={category?.author} date={category?.created_at}/>
            <PostContainer content={category?.text} />
          </MainContainer>
        </div>
      ))}
    </>);
}
