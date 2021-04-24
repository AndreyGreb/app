import React, { useState } from 'react'

import style from './Question.module.scss'

const Question = () => {

    const [visibleAnswerQuestion, setVisibleAnswerQuestion] = useState(false)

    const onClickQuestion = () => {
        setVisibleAnswerQuestion(!visibleAnswerQuestion)
    }

    return (
        <div className={style.productCard__question}>
                  <button type="button" onClick={onClickQuestion} className={style["productCard__question-before"]}>
                    <div
                      className={`${style["productCard__question-plus"]} ${visibleAnswerQuestion ? style.active : ""}`}
                    />
                    <div className={style["productCard__question-before-text"]}>
                      PRODUCT DESCRIPTION
                    </div>
                  </button>
                    {visibleAnswerQuestion && (
                        <div
                        className={style[`productCard__question-after-text`]}>
                        Saints are a low-waist, drop crotch relaxed boyfriend jean.
                        Straight fit across the hips, bow shape legs, with knee
                        darts and tapered leg. Back pockets dropped slightly for
                        slouch feel.
                      </div>
                    )}
                  
                </div>
    )
}

export default Question
