import { IProductCard } from "./types";
import * as images from "../../Components/Common/ExportImage/ExportCatalogImage/ExportCatalogImage";

const initialState: IProductCard = {
  product: [
    {
      id: 0,
      path: "/product/parka-emporio-armani",
      images: [{ id: 0, path: images.parkaEmporioArmani1, description: "parka-Emporio-Armani1", },
      { id: 1, path: images.parkaEmporioArmani2, description: "parka-Emporio-Armani2", }],
      price: "514,90",
      name: "PARKA",
      brand: "EMPORIO ARMANI",
      size: [{id:0, size: "S"}, {id:1, size: "M"},{id:2, size: "L"},{id:3, size: "XL"}]
     
    },
    {
      id: 1,
      path: "/product/leather-jacket",
      images: [{ id: 1, path: images.product2,  description: "parka-Emporio-Armani2", }],
      price: "1003,90",
      name: "LEATHER JACKET",
      brand: "ddf",
      size: [{id:0, size: "S"}, {id:1, size: "M"},{id:2, size: "L"},{id:3, size: "XL"}]
    
    },
  ],
};

const productCardReducer = (
  state = initialState,
  action: { type: string; payload?: any }
) => {
  switch (action.type) {
    // case MainPageAction.getSliderData:
    //   return {
    //     ...state,
    //     data: action.payload,
    //   };
    // case MainPageAction.fetchPosts:
    //   return {
    //     ...state,
    //     posts: [...action.payload],
    //   };

    default:
      return state;
  }
};

export default productCardReducer;
