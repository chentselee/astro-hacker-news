import { fetchAPI } from '../lib/fetchAPI'

interface StoryBrief {
  id: number
  title: string
}

type GetStoriesSearchParams = {
  page: number
}

export const getStories = async ({ page = 1 }: GetStoriesSearchParams): Promise<StoryBrief[]> => {
  const res = await fetchAPI(`https://api.hackerwebapp.com/news?page=${page}`)
  const json = await res.json()
  return json
}

interface Story {
  id: number
  title: string
  kids: number[]
}

interface Comment {
  id: number
  kids: number[]
  parent: number
  text: string
}

export const getStory = async (id: string): Promise<Story> => {
  const res = await fetchAPI(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)
  const json = await res.json()
  return json
}

export const getComment = async (id: string): Promise<Comment> => {
  const res = await fetchAPI(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)
  const json = await res.json()
  return json
}