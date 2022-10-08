import { fetchAPI } from "./fetchAPI";
import type { Item } from "../models/Item";

interface StoryBrief {
  id: number;
  title: string;
  points: number;
  user: string;
  time: number;
  time_ago: string;
  comments_count: number;
  url: string;
  domain: string;
}

type GetStoriesSearchParams = {
  page: number;
};

export const getStories = async ({
  page = 1,
}: GetStoriesSearchParams): Promise<StoryBrief[]> => {
  const json = await fetchAPI(`https://api.hackerwebapp.com/news?page=${page}`);
  return json;
};

export const getItem = async (id: string): Promise<Item> => {
  const json = await fetchAPI(
    `https://hacker-news.firebaseio.com/v0/item/${id}.json`
  );
  return json;
};
