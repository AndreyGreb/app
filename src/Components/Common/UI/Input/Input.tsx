import React, { useState } from "react";


import style from "./Input.module.scss";

interface IInput {
  placeholder: string
  type: string
  inputState: any
  formKey: string
  setInputState: (value:any) => any
}



const Input: React.FC <IInput> = ({placeholder, type, inputState, formKey, setInputState}:IInput) => {

  const changeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputState({...inputState, [formKey]: event.target.value})
  }

  return (
    <input
      className={style.input}
      placeholder={placeholder}
      type={type}
      value={inputState[formKey]}
      onChange={event => {changeInput(event)}}
    />
  );
};

export default Input;
