import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  userIsAuthAction,
  visibleFormAuthAction,
} from "../../../store/GlobalStore/actions";
import {  formErrorAction } from '../../../store/FormAuth/actions'
import { getFormError, getUserData } from "../../../store/FormAuth/selectors";

import Button from "../../Common/UI/Button/Button";

import style from "../FormAccount.module.scss";
import InputSignIn from "./InputSignIn/InputSignIn";

interface IFormSignIn {
  toggleForm: (value: any) => void;
}

const FormSignIn: React.FC<IFormSignIn> = ({ toggleForm }: IFormSignIn) => {
  const [inputState, setInputState] = useState({ email: "", password: "" });

  const dispatch = useDispatch();

  const userData = useSelector(getUserData);
  const formError = useSelector(getFormError);

  const onSubmit = () => {
    userData.map((item) => {
    if (
        inputState.email === item.email &&
          inputState.password === item.password
      )
    {
      dispatch(userIsAuthAction(true));
      dispatch(visibleFormAuthAction(false));
      setInputState({ email: "", password: "" });
    } else {
      dispatch(formErrorAction(true));
    }
    return "";
  });
}

  return (
    <>
      {/* block input */}
      <div className={style["form__content-input"]}>
        <InputSignIn inputState={inputState} setInputState={setInputState} />
      </div>

      {/* block error message */}
      {formError && (
        <div className={style["form__content-error"]}>
          <span>Wrong email or password!</span>
        </div>
      )}

      {/* block button */}
      <Button inputState={inputState} onSubmit={onSubmit} text="SIGN IN" />

      {/* block footer */}
      <div className={style["form__content-footer"]}>
        <div onClick={toggleForm} onKeyDown={toggleForm} role="presentation">
          CREATE ACCOUNT
        </div>
        <div>RESTORE PASSWORD</div>
      </div>
    </>
  );
};

export default FormSignIn;
