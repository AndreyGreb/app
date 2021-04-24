import { combineReducers } from "redux";
import authFormReducer from "./FormAuth/reducer";
import mainPageReducer from "./MainPage/reducer";
import reducer from "./GlobalStore/reducer";
import productCardReducer from "./ProductCard/reducer";
import bagReducer from "./Bag/reducer";



const rootReducer = combineReducers({
    formAuth: authFormReducer,
    globalStore: reducer,
    mainPage: mainPageReducer,
    productCard: productCardReducer,
    bag: bagReducer
})

export default rootReducer