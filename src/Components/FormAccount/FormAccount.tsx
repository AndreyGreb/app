import React, { useState } from "react";

import FormSignIn from "./FormSignIn/FormSignIn";

import style from "./FormAccount.module.scss";
import FormCreateAccount from "./FormCreateAccount/FormCreateAccount";

interface IFormAccount {
  closeFormAccount: (value: any) => void;
  toggleFormAccount: boolean;
  setToggleFormAccount: (value: any) => void;
}

const FormAccount = ({
  closeFormAccount,
  toggleFormAccount,
  setToggleFormAccount,
}: IFormAccount) => {
  const toggleForm = () => {
    setToggleFormAccount(!toggleFormAccount);
  };

  return (
    <div className={style.form}>
      <div className={style.form__content}>
        {/* block header */}
        <div className={style["form__content-header"]}>
          <span>{toggleFormAccount ? "SIGN IN" : "CREATE ACCOUNT"}</span>
          <svg
            onClick={closeFormAccount}
            width="32"
            height="33"
            viewBox="0 0 32 33"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M14.4697 16.0055L0.305137 30.2696C-0.0883785 30.6659 -0.0883785 31.3079 0.305137 31.7042C0.501645 31.9026 0.759655 32.0012 1.01716 32.0012C1.27517 32.0012 1.53268 31.9026 1.72919 31.7042L16.0002 17.3328L30.2713 31.7042C30.4683 31.9026 30.7258 32.0012 30.9833 32.0012C31.2408 32.0012 31.4989 31.9026 31.6954 31.7042C32.0889 31.3079 32.0889 30.6659 31.6954 30.2696L17.5313 16.0055L31.7049 1.7314C32.0984 1.33512 32.0984 0.693112 31.7049 0.296832C31.3113 -0.0989441 30.6738 -0.0989441 30.2808 0.296832L16.0007 14.6782L1.71919 0.297336C1.32568 -0.0984406 0.688652 -0.0984406 0.295137 0.297336C-0.0983788 0.693616 -0.0983788 1.33562 0.295137 1.7319L14.4697 16.0055Z"
              fill="#1D1D1B"
            />
          </svg>
        </div>

        {toggleFormAccount ? (
          <FormSignIn toggleForm={toggleForm} />
        ) : (
          <FormCreateAccount toggleForm={toggleForm} />
        )}
      </div>
    </div>
  );
};

export default FormAccount;
