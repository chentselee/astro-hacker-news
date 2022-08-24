import axios from 'axios'

interface StoryBrief {
  id: number
  title: string
}

type GetStoriesSearchParams = {
  page: number
}

export const getStories = async ({ page = 1 }: GetStoriesSearchParams): Promise<StoryBrief[]> => {
  const { data } = await axios.get(`https://api.hackerwebapp.com/news?page=${page}`)
  return data
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
  const { data } = await axios.get(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)
  return data
}

export const getComment = async (id: string): Promise<Comment> => {
  const { data } = await axios.get(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)
  return data
}