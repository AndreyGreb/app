import { ISignInObject } from "./types";

export enum AuthFormActionType {
  userCreateAccount = "USER_CREATE_ACCOUNT",
  formError = "FORM_ERROR",
  toogleFormAuth = "TOGGLE_FORM_AUTH"
}

export const userCreateAccountnAction = (createAccountObject: ISignInObject) => {
  return {
    type: AuthFormActionType.userCreateAccount,
    payload: createAccountObject,
  };
};

export const formErrorAction = (formError: boolean) => {
  return {
    type: AuthFormActionType.formError,
    payload: formError,
  };
};

export const toggleFormAuthAction = (toggleFormAuth: boolean) => {
  return {
    type: AuthFormActionType.toogleFormAuth,
    payload: toggleFormAuth,
  };
};
