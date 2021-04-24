import { IPost } from './types';

export enum MainPageAction {
  getSliderData = "GET_SLIDER_DATA",
  fetchPosts = 'FETCH_POSTS'
}

export const getSliderData = (data: any) => {
  return {
    type: MainPageAction.getSliderData,
    payload: data,
  };
};

export const fetchPostDataAction = (posts: IPost[]) => {
  return {
    type: MainPageAction.fetchPosts,
    payload: posts,
  };
};
