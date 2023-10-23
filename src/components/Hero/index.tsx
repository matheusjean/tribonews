"use client"
import React, { useEffect, useState } from "react";
import Card from "../Card";
import { Container, Hero as HeroSection } from './styles';
import { getNews } from 'services/Requests';

const Hero = () => {
  const [news, setNews] = useState<News[]>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await getNews();
        console.log({ response });

        setNews(response);
      } catch (error) {
        console.error('Erro ao buscar dados:', error);
      }
    }
    fetchData();
  }, []);

  const filteredNews = news.filter(item => item.isHighlighted >= 1 && item.isHighlighted <= 3);

  return (
    <HeroSection>
      <Container>
        {filteredNews.map((item) => {
          let highlightedClass = '';

          if (item.isHighlighted === 1) {
            highlightedClass = 'highlighted-1';
          } else if (item.isHighlighted === 2) {
            highlightedClass = 'highlighted-2';
          } else if (item.isHighlighted === 3) {
            highlightedClass = 'highlighted-3';
          }

          return (
            <Card
              hat={item.hat}
              cover={item.image}
              id={item.id}
              category={item.categories[0].name}
              title={item.title}
              authorName={item.author.username}
              time={item.created_at}
              key={item.id}
              highlightedClass={highlightedClass}
            />
          );
        })}
      </Container>
    </HeroSection>
  );
}

export default Hero;
