import React from "react";
import { Link } from "react-router-dom";

import style from "./SliderItem.module.scss";

interface ISliderItem {
  path: string;
  source: any;
  alt: string;
  text: string;
  className: string
}

const SliderItem: React.FC<ISliderItem> = ({
  path,
  source,
  alt,
  text,
  className
}: ISliderItem) => {
  return (
    <>
        <Link to={path} className={`${style.sliderItem} ${style[`${className}`]}`} >
       
          <img className={style.image}  src={source} alt={alt}/>
          <span className={style.text}>{text}</span>
          <div className={`${style.mask} ${style[`${className}`]}`} />
         
        </Link>
    </>
  );
};

export default SliderItem;
