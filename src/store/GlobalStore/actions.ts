
export enum ActionType {
  userIsAuth = "USER_IS_AUTH",
  visibleFormAuth = "VISIBLE_FORM_AUTH",
}

export const userIsAuthAction = (userIsAuth: boolean) => {
  return {
    type: ActionType.userIsAuth,
    payload: userIsAuth,
  };
};

export const visibleFormAuthAction = (visibleForm: boolean) => {
  return {
    type: ActionType.visibleFormAuth,
    payload: visibleForm,
  };
};
