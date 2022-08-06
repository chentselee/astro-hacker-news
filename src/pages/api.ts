export const getStories = async (): Promise<number[]> => {
  const res = await fetch('https://hacker-news.firebaseio.com/v0/topstories.json')
  const json: number[] = await res.json()
  return json.slice(0, 10)
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
  const res = await fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)
  const json = await res.json()
  return json
}

export const getComment = async (id: string): Promise<Comment> => {
  const res = await fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)
  const json = await res.json()
  return json
}