"use client"
import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { getNewsByHat } from 'services/Requests';

type PostContextType = {
  news: News | null;
  setNews: React.Dispatch<React.SetStateAction<News | null>>;
};

const PostContext = createContext<PostContextType | undefined>(undefined);

type PostProviderProps = {
  children: ReactNode;
  hat: string;
};

export const PostProvider: React.FC<PostProviderProps> = ({ children, hat }) => {
  const [news, setNews] = useState<News | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await getNewsByHat(hat);
        setNews(response);
      } catch (error) {
        console.error('Erro ao buscar dados:', error);
      }
    }

    if (hat) {
      fetchData();
    }
  }, [hat]);

  return (
    <PostContext.Provider value={{ news, setNews }}>
      {children}
    </PostContext.Provider>
  );
};

export const usePost = () => {
  const context = useContext(PostContext);
  if (context === undefined) {
    throw new Error('usePost deve ser usado dentro de um PostProvider');
  }
  return context;
};
