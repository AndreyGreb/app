export interface IMainPage {
  sliderImage: any[];
  posts: IPost[]
}

export interface IPost {
  body: string;
  id: number;
  title: string;
  userId: number;
}
