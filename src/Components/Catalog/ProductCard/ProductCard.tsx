import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router";
import { addToBagAction } from "../../../store/Bag/actions";
import { IObject } from "../../../store/Bag/types";
import getProductCard from "../../../store/ProductCard/selectors";

import PageWrapper from "../../Common/PageWrapper/PageWrapper";
import ButtonAddToBag from "../../Common/UI/ButtonAddToBag/ButtonAddToBag";

import style from "./ProductCard.module.scss";
import Question from "./Question/Question";
import Size from "./Size/Size";

const ProductCard = () => {
  const location = useLocation();

  const getProduct = useSelector(getProductCard);

  const product = getProduct.find((item) => item.path === location.pathname);

  const [selectedSize, setSelectedSize] = useState(product!.size[0].id);

  const selectSize = (id: number) => {
    setSelectedSize(id);
  };

  const dispatch = useDispatch();

  const addProductBag = () => {
    const addProduct = {
      id: product!.id,
      selectedSize,
      path: product!.path,
      images: product!.images,
      price: product!.price,
      name: product!.name,
      brand: product!.brand,
      size: product!.size,
    };
    dispatch(addToBagAction(addProduct));
  };

  return (
    <PageWrapper colorHeader="black">
      <section key={product!.id} className={style.productCard}>
        <div className={style.productCard__images}>
          {product!.images.map((image) => {
            return (
              <img key={image.id} src={image.path} alt={image.description} />
            );
          })}
        </div>
        <div className={style.productCard__description}>
          <span className={style["productCard__description-brand"]}>
            {product!.brand}
          </span>
          <span className={style["productCard__description-name"]}>
            {product!.name}
          </span>
          <span className={style["productCard__description-price"]}>
            USD ${product!.price}
          </span>
          <div className={style["productCard__description-size"]}>
            <span className={style["size-title"]}>SIZE</span>
            <div className={style.wrapper}>
              {product!.size.map((size) => {
                return (
                  <Size
                    selectedSize={selectedSize}
                    selectSize={selectSize}
                    key={size.id}
                    size={size}
                  />
                );
              })}
            </div>
          </div>

          <ButtonAddToBag addProductBag={addProductBag} />

          <div className={style.productCard__questions}>
            <Question />
            <Question />
          </div>
        </div>
      </section>
    </PageWrapper>
  );
};

export default ProductCard;
