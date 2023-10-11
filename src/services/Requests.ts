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

export const getCategory = async () => {
  const response = await (await httpRequest.get(`/category`)).data
  return response
}

export const getCategoryById = async (categoryId: string) => {
  const category = await (await httpRequest.get(`/category/${categoryId}`)).data

  return category
}

export const getCategoryByName = async (name: string) => {
  const category = await (
    await httpRequest.get(`/category/by-category/${name}`)
  ).data

  return category
}
