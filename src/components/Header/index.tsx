"use client"
import { useEffect, useRef, useState } from 'react';
import { useClickAway } from 'react-use';
import Image from 'next/image';
import Logo from '../../assets/ilhadaslendas.png';
import * as S from './styles';
import Link from 'next/link';
import { getCategory } from 'services/Requests';

export default function Header() {
  const [catName, setCatName] = useState<Category[]>([]);
  const [, setMenuIsOpen] = useState(false);
  const reference = useRef(null);
  useClickAway(reference, () => {
    setMenuIsOpen(false);
  });

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await getCategory();
        setCatName(response);
      } catch (error) {
        console.error('Erro ao buscar dados:', error);
      }
    }

    fetchData();
  }, []);

  return (
    <S.Wrapper>
      <S.Container>
        <S.ContentsContainer>
          <S.LogoContent aria-label="logo">
            <Link href="/">
              <Image
                data-testid="logoooo"
                src={Logo}
                objectFit="cover"
                height={50}
                width={50}
                alt="logo"
              />
            </Link>
          </S.LogoContent>
          <S.Web>
            <S.ListContent>
              {catName.map((cat) => (
                <S.DivisionContent key={cat.id}>
                  <S.Text>
                    <Link
                      href={`/category/by-category/${cat.name}`}
                    >
                      {cat.name}
                    </Link>
                  </S.Text>
                </S.DivisionContent>
              ))}
            </S.ListContent>
          </S.Web>
        </S.ContentsContainer>
      </S.Container>
    </S.Wrapper>
  );
}
