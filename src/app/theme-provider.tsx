"use client";
import theme from '../styles/theme';
import { ThemeProvider as Provider } from 'styled-components'

export default function ThemeProvider({ children }:  any) {
  return (
    <Provider theme={theme}>
      {children}
    </Provider>
  );
}
