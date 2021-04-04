import React, { useState } from "react";
import Input from "../../../Common/UI/Input/Input";

interface IInputCreateAccount {
    inputState:any
    setInputState:(value:any) => any
}

const InputCreateAccount = ({inputState, setInputState}:IInputCreateAccount) => {
  

  return (
    <>
      <Input
        inputState={inputState}
        formKey="firstName"
        setInputState={setInputState}
        placeholder="First Name"
        type="text"
      />
      <Input
        inputState={inputState}
        formKey="lastName"
        setInputState={setInputState}
        placeholder="Last Name"
        type="text"
      />
       <Input
        inputState={inputState}
        formKey="email"
        setInputState={setInputState}
        placeholder="Email"
        type="text"
      />
       <Input
        inputState={inputState}
        formKey="password"
        setInputState={setInputState}
        placeholder="Password"
        type="password"
      />
    </>
  );
};

export default InputCreateAccount;
