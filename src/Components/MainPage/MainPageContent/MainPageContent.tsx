import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import ButtonMainPage from '../../Common/UI/ButtonMainPage/ButtonMainPage'

import style from './MainPageContent.module.scss'
import network from '../../../network';
import { fetchPostDataAction } from '../../../store/MainPage/actions';


interface IMAinPageContent {
    textTitle: string
    textMiddle: any
    pathButton: string
    textButton: string
}



const MainPageContent: React.FC <IMAinPageContent> = ({textTitle, textMiddle, pathButton,textButton}:IMAinPageContent) => {
  
  // const dispatch = useDispatch()
  
  
  // const getData = () => {
  //   async function fetchPost() {
  //     const data: any = await network.getRequest('/posts')
  //     console.log(data)
  //     dispatch(fetchPostDataAction(data))
  //   } 
  //   fetchPost()
  // }

  // useEffect(getData, [dispatch])
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