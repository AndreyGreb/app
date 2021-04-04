import React from 'react'

import style from './Button.module.scss'

interface IButton {
    text: string,
    inputState: any
}

const Button: React.FC<IButton> = ({text, inputState}:IButton) => {
    return (
        <button onClick={() => {console.log(inputState)}} className={style.button} type="button">{text}</button>
    )
}

export default Button