import { httpRequest } from './http-request'

export const getNews = async () => {
  const response = await (await httpRequest.get(`/news`)).data
  return response
}
