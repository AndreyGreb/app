import { AddBagAction } from './actions';
import { IBag } from "./types";

const initialState: IBag = {
  bag: [],
};

const bagReducer = (
  state = initialState,
  action: { type: string; payload?: any }
) => {
  switch (action.type) {
    case AddBagAction.addToBag:
      return {
        ...state,
        bag: [...state.bag, action.payload]
      };
    
    default:
      return state;
  }
};

export default bagReducer;
