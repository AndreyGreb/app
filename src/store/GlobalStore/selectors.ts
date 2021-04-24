import TState from "../rootType"

export const getUserIsAuth = (state:TState) => {
    return state.globalStore.userIsAuth
}

export const getVisibleFormAuth = (state:TState) => {
    return state.globalStore.visibleFormAuth
}