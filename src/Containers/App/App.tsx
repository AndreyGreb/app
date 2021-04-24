import React from "react";
import { Route } from "react-router-dom";
import Bag from "../../Components/Bag/Bag";
import Catalog from "../../Components/Catalog/Catalog";
import ProductCard from "../../Components/Catalog/ProductCard/ProductCard";


import MainPage from "../../Components/MainPage/MainPage";

import "./main.scss";


const App = () => {
  return (
    <>
    <Route path="/product" component={ProductCard}/>
    <Route exact path="/catalog" component={Catalog} />
    <Route exact path="/bag" component={Bag} />
    <Route exact path="/" component={MainPage} />

    </>
  );
};

export default App;
