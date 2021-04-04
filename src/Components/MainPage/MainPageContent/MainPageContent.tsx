import React from 'react'
import ButtonMainPage from '../../Common/UI/ButtonMainPage/ButtonMainPage'

import style from './MainPageContent.module.scss'

interface IMAinPageContent {
    textTitle: string
    textMiddle: any
    pathButton: string
    textButton: string
}

const MainPageContent: React.FC <IMAinPageContent> = ({textTitle, textMiddle, pathButton,textButton}:IMAinPageContent) => {

    return(
        <>
          <span className={style["mainPage__content-title"]}>
            {textTitle}
          </span>
          <span className={style["mainPage__content-middle"]}>
            {textMiddle}
          </span>
          <ButtonMainPage path={pathButton} text={textButton} />
        </>
    )
}

export default MainPageContent