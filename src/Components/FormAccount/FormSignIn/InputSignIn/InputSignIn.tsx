import React, { useState } from "react";
import Input from "../../../Common/UI/Input/Input";

interface IInputSignIn {
    inputState:any
    setInputState:(value:any) => any
}

const InputSignIn = ({inputState, setInputState}:IInputSignIn) => {
  
  return (
    <>
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

export default InputSignIn;
