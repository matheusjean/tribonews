"use client"
import react from 'react'
import { Heading2 } from 'components/Heading2'
import { MainContainer } from 'components/MainContainer'
import { PostContainer } from 'components/PostContainer'
import { PostCover } from 'components/PostCover'
import { PostDetails } from 'components/PostDetails'
import { useEffect, useState } from 'react'
import { getNewsByHat } from 'services/Requests'
import { useParams } from 'next/navigation'

export default function Post() {
  const [news, setNews] = useState<News>()

  const hat = useParams()

  console.log(hat.slug[1])

  useEffect(() => {
    async function fetchData() {
      const response = await getNewsByHat(hat.slug[1]);
      console.log('Resposta da API:', response);
      setNews(response);
      return response
    }
    fetchData()
  }, [])

  return (
    <>
      <Heading2>{news?.title}</Heading2>
      <MainContainer>
        <PostCover coverUrl={news?.image} alt={news?.hat} />
        <PostDetails author={news?.author} date={news?.created_at} />
        <PostContainer content={news?.text} />
      </MainContainer>
    </>
  )
}
