export interface Story {
  id: number;
  title: string;
  score: number;
  text: string;
  time: number;
  by: string;
  kids: number[];
  descendants: number;
  type: "story";
}

export interface Comment {
  id: number;
  kids: number[];
  parent: number;
  text: string;
  time: number;
  by: string;
  type: "comment";
}

export type Item = Story | Comment;
