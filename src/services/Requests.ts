import { httpRequest } from './http-request'

export const getNews = async () => {
  const response = await (await httpRequest.get(`/news`)).data
  return response
}

export const getNewsById = async (newsId: string) => {
  const news = await (await httpRequest.get(`news/${newsId}`)).data

  return news
}

export const getNewsByHat = async (hat: string) => {
  const news = await (await httpRequest.get(`/news/by-hat/${hat}`)).data

  return news
}
