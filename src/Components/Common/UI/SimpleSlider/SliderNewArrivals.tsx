import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SliderItem from "../../../MainPage/SliderItem/SliderItem";
import sliderImage from "../../SliderImagesExport/SliderImagesExport";

export default function SliderNewArrivals() {
  const imageArray = [
    {
      id: 0,
      path: "/",
      source: sliderImage.sliderNewArrivalsImage1,
      alt: "sliderImage1",
      text: "GET NOW",
    },
    {
      id: 1,
      path: "/",
      source: sliderImage.sliderNewArrivalsImage2,
      alt: "sliderImage2",
      text: "GET NOW",
    },
    {
      id: 2,
      path: "/",
      source: sliderImage.sliderNewArrivalsImage3,
      alt: "sliderImage3",
      text: "GET NOW",
    },
    {
      id: 3,
      path: "/",
      source: sliderImage.sliderNewArrivalsImage4,
      alt: "sliderImage4",
      text: "GET NOW",
    },
    {
      id: 4,
      path: "/",
      source: sliderImage.sliderNewArrivalsImage5,
      alt: "sliderImage5",
      text: "GET NOW",
    },
    {
      id: 5,
      path: "/",
      source: sliderImage.sliderNewArrivalsImage6,
      alt: "sliderImage6",
      text: "GET NOW",
    },
  ];

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
  };
  return (
    <Slider {...settings}>
      {imageArray.map(item => {
        return(
        <SliderItem
        key={item.id}
        path={item.path}
        source={item.source}
        alt={item.alt}
        text={item.text}
        className="newArrivals"
      />
        )
      })}
      
    </Slider>
  );
}
