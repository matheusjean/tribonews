import axios from 'axios'

export const httpRequest = axios.create({
  baseURL: 'https://news-with-prisma.vercel.app'
})
