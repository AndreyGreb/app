import TState from "../rootType"

const getProductBag = (state:TState) => {
    return state.bag.bag
}

export default getProductBag