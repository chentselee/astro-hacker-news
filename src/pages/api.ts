import { fetchAPI } from '../lib/fetchAPI'

interface StoryBrief {
  id: number
  title: string
  points: number
  user: string
  time: number
  time_ago: string
  comments_count: number
  url: string
  domain: string
}

type GetStoriesSearchParams = {
  page: number
}

export const getStories = async ({ page = 1 }: GetStoriesSearchParams): Promise<StoryBrief[]> => {
  const json = await fetchAPI(`https://api.hackerwebapp.com/news?page=${page}`)
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
  const json = await fetchAPI(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)
  return json
}

export const getComment = async (id: string): Promise<Comment> => {
  const json = await fetchAPI(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)
  return json
}