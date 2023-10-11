"use client"
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import ThemeProvider from './theme-provider'
import GlobalStyles from '../styles/global'
import { PostProvider } from 'context/NewsContext'
import { useParams } from 'next/navigation'

const inter = Inter({ subsets: ['latin'] })

const metadata: Metadata = {
  title: 'Tribo News',
  description: 'Generated by create next app'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  const hat = useParams()

  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider>
          <PostProvider hat={hat?.slug?.[1] as any}>
            <GlobalStyles />
            {children}
          </PostProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
