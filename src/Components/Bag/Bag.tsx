import React, { useState } from "react";
import { useSelector } from "react-redux";
import getProductBag from "../../store/Bag/selectors";
import getProductCard from "../../store/ProductCard/selectors";
import { IObject } from "../../store/Bag/types";
import PageWrapper from "../Common/PageWrapper/PageWrapper";

import style from "./Bag.module.scss";

const Bag = () => {
  const productBag = useSelector(getProductBag);

  interface IObject {
    id: number;
    selectedSize: number;
    path: string;
    images: IImages[];
    price: string;
    name: string;
    brand: string;
    size: ISize[];
  }

  interface IImages {
    id: number;
    path: string;
    description: string;
  }

  interface ISize {
    id: number;
    size: string;
  }

  return (
    <PageWrapper colorHeader="black">
      <section className={style.bag}>
        <div className={style.bag__title}>
          <span className={style["bag__title-text"]}>BAG</span>
          <span className={style["bag__title-items"]}>
            {productBag.length} items
          </span>
        </div>
        {productBag.map((item: IObject) => {
          return (
            <div key={item.id} className={style.bag__item}>
              <img src={item.images[0].path} alt="" />
              <div className={style["bag__item-description"]}>
                <span className={style["bag__item-description-brand"]}>
                  {item.brand}
                </span>
                <span className={style["bag__item-description-name"]}>
                  {item.name}
                </span>
                <span className={style["bag__item-description-price"]}>
                  USD ${item.price}
                </span>
                <span className={style["bag__item-description-size"]}>
                  SIZE: {item.selectedSize}
                </span>
                <span className={style["bag__item-description-quantity"]}>
                  QUANTITY
                </span>
              </div>
            </div>
          );
        })}
      </section>
    </PageWrapper>
  );
};

export default Bag;
