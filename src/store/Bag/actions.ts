import { IObject } from './types';

export enum AddBagAction {
  addToBag = "ADD_TO_BAG",
  
}

export const addToBagAction = (data: IObject) => {
  return {
    type: AddBagAction.addToBag,
    payload: data,
  };
};




