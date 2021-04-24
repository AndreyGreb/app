import { IBag } from './Bag/types';
import { IState } from './GlobalStore/types';
import { IFormAuth } from './FormAuth/types';
import { IMainPage } from './MainPage/types';
import { IProductCard } from './ProductCard/types';


type TState = {
    formAuth: IFormAuth,
    globalStore: IState
    mainPage: IMainPage
    productCard: IProductCard
    bag: IBag
}

export default TState