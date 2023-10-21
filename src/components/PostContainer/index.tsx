import React from 'react';
import {marked} from 'marked';
import { Container } from './styles';

export type PostContentProps = {
  content?: string;
};

export const PostContainer = ({ content }: PostContentProps) => {
  if (!content) {
    return null;
  }

  const htmlContent = marked(content);
  return <Container dangerouslySetInnerHTML={{ __html: htmlContent }} />;
};
