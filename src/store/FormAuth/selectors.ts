import TState from "../rootType"

export const getUserData = (state:TState) => {
    return state.formAuth.userData
}

export const getFormError = (state:TState) => {
    return state.formAuth.formError
}

export const getToggleFormAuth = (state:TState) => {
    return state.formAuth.toggleFormAuth
}