import { IMainPage, IPost } from "./types";
import { MainPageAction } from "./actions";

const initialState: IMainPage = {
  sliderImage: [],
  posts: [] as IPost[]
};

const reducer = (
  state = initialState,
  action: { type: string; payload?: any }
) => {
  switch (action.type) {
    case MainPageAction.getSliderData:
      return {
        ...state,
        data: action.payload,
      };
    case MainPageAction.fetchPosts:
      return {
        ...state,
        posts: [...action.payload],
      };

    default:
      return state;
  }
};

export default reducer;
