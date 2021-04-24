export interface IFormAuth {
  userData: {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
  }[];

  formError: boolean;
  toggleFormAuth: boolean;
}

export interface ISignInObject {
  email: string;
  password: string;
}
