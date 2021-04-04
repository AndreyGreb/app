export enum ActionType {
    userLogin = "USER LOGIN",
}

export const userLoginAction = (login:string) => {
    return (
        {
            type:ActionType.userLogin,
            payload: login,
        }
    )
}