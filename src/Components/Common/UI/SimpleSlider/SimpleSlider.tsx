import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SliderItem from "../../../MainPage/SliderItem/SliderItem";
import sliderImage from '../../SliderImagesExport/SliderImagesExport'

export default function SimpleSlider() {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true
  };
  return (
    <Slider {...settings}>
      <SliderItem path="/" source={sliderImage.sliderImage1} alt="sliderImage1" text="GET NOW" />
      <SliderItem path="/"  source={sliderImage.sliderImage2}  alt="sliderImage2" text="GET NOW" />
      <SliderItem path="/"  source={sliderImage.sliderImage3}  alt="sliderImage3" text="GET NOW" />
      <SliderItem path="/"  source={sliderImage.sliderImage4}  alt="sliderImage4" text="GET NOW" />
      <SliderItem path="/"  source={sliderImage.sliderImage5}  alt="sliderImage5" text="GET NOW" />
      <SliderItem path="/"  source={sliderImage.sliderImage6}  alt="sliderImage6" text="GET NOW" />

    </Slider>
  );
}
