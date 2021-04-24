import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import getProductCard from "../../store/ProductCard/selectors";
import {
  parkaEmporioArmani1,
  product2,
} from "../Common/ExportImage/ExportCatalogImage/ExportCatalogImage";
import PageWrapper from "../Common/PageWrapper/PageWrapper";

import style from "./Catalog.module.scss";

const Catalog = () => {
  const getProduct = useSelector(getProductCard);
  return (
    <PageWrapper colorHeader="black">
      <section className={style.catalog}>
        <nav className={style.catalog__navbar}>
          <div className={style["catalog__navbar-categories"]}>
            <span>CATEGORIES</span>
            <ul>
              <li>TOPS</li>
              <li>NEW ARRIVALS</li>
              <li>COLLECTIONS</li>
              <li>TEES AND TANKS</li>
              <li>SHIRTS</li>
              <li>DRESSES</li>
              <li>JACKETS</li>
              <li>KNITWEAR</li>
              <li>JUMPSUITS</li>
              <li>BOTTOMS</li>
              <li>INTIMATES</li>
              <li>SHORTS</li>
              <li>JEANS</li>
              <li>SKIRTS</li>
              <li>SALE</li>
              <li>SHOP ALL</li>
            </ul>
          </div>
        </nav>

        {/* product */}
        <section className={style.catalog__product}>
          {getProduct.map((item) => {
            return (
              <Link
                key={item.id}
                className={style["catalog__product-item"]}
                to={item.path}>
                <img src={item.images[0].path} alt={item.images[0].description} />
                <span className={style["catalog__product-item-price"]}>
                  ${item.price}
                </span>
                <div className={style["catalog__product-item-description"]}>
                  <span className={style["catalog__product-item-brand"]}>
                    {item.brand}
                  </span>
                  <span>
                    /
                  </span>
                  <span className={style["catalog__product-item-name"]}>
                    {item.name}
                  </span>
                </div>
              </Link>
            );
          })}
        </section>
      </section>
    </PageWrapper>
  );
};

export default Catalog;
