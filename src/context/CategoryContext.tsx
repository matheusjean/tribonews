"use client"
import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { getCategoryByName } from 'services/Requests';

type PostContextType = {
  catName: CategoryRequestByName[] | null;
  setCatName: React.Dispatch<React.SetStateAction<CategoryRequestByName[] | null>>;
};

const PostContext = createContext<PostContextType | undefined>(undefined);

type PostProviderProps = {
  children: ReactNode;
  name: string;
};

export const CategoryProvider: React.FC<PostProviderProps> = ({ children, name }) => {
  const [catName, setCatName] = useState<CategoryRequestByName[] | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await getCategoryByName(name);
        console.log(response);

        setCatName(response);
      } catch (error) {
        console.error('Erro ao buscar dados:', error);
      }
    }

    if (name) {
      fetchData();
    }
  }, [name]);

  return (
    <PostContext.Provider value={{ catName, setCatName }}>
      {children}
    </PostContext.Provider>
  );
};

export const useCategoryPost = () => {
  const context = useContext(PostContext);
  if (context === undefined) {
    throw new Error('useCategoryPost deve ser usado dentro de um PostProvider');
  }
  return context;
};
