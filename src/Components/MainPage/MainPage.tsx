import React from "react";
import Slider from "react-slick";

import PageWrapper from "../Common/PageWrapper/PageWrapper";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import style from "./MainPage.module.scss";
import MainPageContent from "./MainPageContent/MainPageContent";
import SimpleSlider from "../Common/UI/SimpleSlider/SimpleSlider";

const MainPage = () => {
  return (
    <PageWrapper colorHeader="white">
      <div className={`${style.mainPage} ${style.newCollectionBack}`}>
        {/* bljck new collection */}
        <div className={`${style.mainPage__content} ${style.newCollection}`}>
          <MainPageContent
            textTitle="NEW COLLECTION"
            textMiddle={
              <>
                Our easiest chuck-on-and-go staples come with a serious style
                heritage
                <br />
                that’s liberating, sexy, comfy and supremely cool.
              </>
            }
            textButton="SHOP NEW ARRIVALS"
            pathButton="/"
          />
        </div>
      </div>

      {/* block vintage inspired */}
      <div className={`${style.mainPage} ${style.vintageInspiredBack}`}>
        <div className={`${style.mainPage__content} ${style.vintageInspired}`}>
          <MainPageContent
            textTitle="VINTAGE INSPIRED"
            textMiddle={
              <>
                Inspired by the ‘70s and 80’s), we know that if you sift through
                <br />
                our vintage inspired collection you’re gonna rock the perfect
                silhouette.
              </>
            }
            textButton="SHOP NOW"
            pathButton="/"
          />
        </div>
      </div>

      {/* block slider */}
      <SimpleSlider />
    </PageWrapper>
  );
};

export default MainPage;
