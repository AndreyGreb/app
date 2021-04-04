import React from "react";
import { Route } from "react-router-dom";
import Catalog from "../../Components/Catalog/Catalog";

import MainPage from "../../Components/MainPage/MainPage";

import "./main.scss";


const App = () => {
  return (
    <>
    <Route exact path="/catalog" component={Catalog} />
    <Route exact path="/" component={MainPage} />
    </>
  );
};

export default App;
