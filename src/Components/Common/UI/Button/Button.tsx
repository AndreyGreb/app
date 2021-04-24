import React from 'react'

import style from './Button.module.scss'

interface IButton {
    text: string,
    inputState: any
    onSubmit: ()=> void
}

const Button: React.FC<IButton> = ({text, inputState, onSubmit}:IButton) => {
    return (
        <button onClick={onSubmit} className={style.button} type="button">{text}</button>
    )
}

export default Button