import React, { useState } from "react";

import Button from "../../Common/UI/Button/Button";

import style from "../FormAccount.module.scss";
import InputSignIn from "./InputSignIn/InputSignIn";

interface IFormSignIn {
  toggleForm: (value: any) => void;
}

const FormSignIn: React.FC<IFormSignIn> = ({
  toggleForm,
}: IFormSignIn) => {

  const [inputState, setInputState] = useState({ email: "", password: "" });

    return (
    <>
            {/* block input */}
            <div className={style["form__content-input"]}>
              <InputSignIn inputState={inputState} setInputState={setInputState} />
            </div>

            {/* block button */}
            <Button inputState={inputState} text="SIGN IN" />

            {/* block footer */}
            <div className={style["form__content-footer"]}>
              <div onClick={toggleForm} onKeyDown={toggleForm} role="presentation"> 
                CREATE ACCOUNT
              </div>
              <div>
                RESTORE PASSWORD
              </div>
            </div>
          
     
    </>
  );
};

export default FormSignIn;
