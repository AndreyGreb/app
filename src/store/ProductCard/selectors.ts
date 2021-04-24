import TState from "../rootType"

const getProductCard = (state:TState) => {
    return state.productCard.product
}

export default getProductCard