import React from 'react'
import { Link } from 'react-router-dom'

import style from './ButtonMainPage.module.scss'

interface IButtonMainPage {
    path: string
    text: string
}

const ButtonMainPage: React.FC <IButtonMainPage> = ({path, text}:IButtonMainPage) => {

    return(
        <>
        <Link className={style.button} to={path}>{text}</Link>
        </>
    )
}

export default ButtonMainPage