import { IFormAuth } from "./types";
import { AuthFormActionType } from "./actions";

const initialState: IFormAuth = {
  userData: [
    {
      firstName: "Андрей",
      lastName: "Гребешов",
      email: "andrey.grebeshov@gmail.com",
      password: "1234",
    },
    {
      firstName: "Владиства",
      lastName: "Иванов",
      email: "ivanov@gmail.com",
      password: "123",
    },
  ],
  formError: false,
  toggleFormAuth: true,
};

const formAuthReducer = (
  state = initialState,
  action: { type: string; payload?: any }
) => {
  switch (action.type) {
    case AuthFormActionType.userCreateAccount:
      return {
        ...state,
        userData: [...state.userData, action.payload],
      };
    case AuthFormActionType.formError:
      return {
        ...state,
        formError: action.payload,
      };
    case AuthFormActionType.toogleFormAuth:
      return {
        ...state,
        toggleFormAuth: action.payload,
      };
    default:
      return state;
  }
};

export default formAuthReducer;
