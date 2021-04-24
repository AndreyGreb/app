import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { userIsAuthAction, visibleFormAuthAction } from "../../../store/GlobalStore/actions";
import { userCreateAccountnAction } from '../../../store/FormAuth/actions'

import Button from "../../Common/UI/Button/Button";



import style from "../FormAccount.module.scss";
import InputCreateAccount from "./InputCreateAccount/InputCreateAccount";

interface IFormCreateAccount {
  toggleForm: (value: any) => void;
}

const FormCreateAccount = ({
  toggleForm,
}: IFormCreateAccount) => {

  const [inputState, setInputState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const dispatch = useDispatch()

  const onSubmit = () => {
    dispatch(userCreateAccountnAction((inputState)))
    dispatch(visibleFormAuthAction(false))
    dispatch(userIsAuthAction(true))
    alert("Registration success!")
  }

  return (
   <>
     
          {/* block input */}
          <div className={style["form__content-input"]}>
            <InputCreateAccount inputState={inputState} setInputState={setInputState} />
          </div>
          
          {/* block checkbox */}
          <div className={style.checkbox}>
            <label className={style.checkbox__label} htmlFor="checkbox">
              <input
                className={style.checkbox__input}
                id="checkbox"
                type="checkbox"
              />
              <span className={style.checkbox__span} />
            </label>
            <span>
              Let&apos;s get personal! We&apos;ll send you only the good stuff:
              <br />
              Exclusive early access to Sale, new arrivals and promotions. No
              nasties.
            </span>
          </div>

          {/* block agree */}
          <div className={style["form__content-agree"]}>
            <span>By signing up you agree to&nbsp;</span>
            <div>Terms of Service</div>
            <span>&nbsp;and&nbsp;</span>
            <div>Privacy Policy</div>
          </div>

          {/* block button */}
          <Button onSubmit={onSubmit} inputState={inputState} text="SIGN UP" />

          {/* block footer */}
          <div className={style["form__content-footer"]}>
            <div onClick={toggleForm} onKeyDown={toggleForm} role="presentation">
              I HAVE AN ACCOUNT
            </div>
          </div>
    
  </>

  );
};

export default FormCreateAccount;
