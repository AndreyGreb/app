import { IState } from "./types";
import { ActionType } from "./actions";

const initialState: IState = {
  userIsAuth: false,
  visibleFormAuth: false
};

const mainPageReducer = (
  state = initialState,
  action: { type: string; payload?: any }
) => {
  switch (action.type) {
    case ActionType.userIsAuth:
      return {
        ...state,
        userIsAuth: action.payload,
      };
      case ActionType.visibleFormAuth:
        return {
          ...state,
          visibleFormAuth: action.payload,
        };
    default:
      return state;
  }
};

export default mainPageReducer;
