import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { visibleFormAuthAction } from "../../../store/GlobalStore/actions";
import { toggleFormAuthAction } from '../../../store/FormAuth/actions'
import { getVisibleFormAuth } from "../../../store/GlobalStore/selectors";
import Footer from "../../Footer/Footer";
import FormAccount from "../../FormAccount/FormAccount";
import Header from "../../Header/Header";

import style from "./PageWrapper.module.scss";

interface IPageWrapper {
  children: React.ReactNode;
  colorHeader: string
}

const PageWrapper: React.FC<IPageWrapper> = ({ children, colorHeader }: IPageWrapper) => {
 

  const dispatch = useDispatch()
  const getvisibleForm = useSelector(getVisibleFormAuth)

  const openFormSignIn = () => {
    dispatch(visibleFormAuthAction(true))
    dispatch(toggleFormAuthAction(true))
  };
  const closeFormAccount = () => {
    dispatch(visibleFormAuthAction(false))
  };
  return (
    <>
      <div className={style.page}>
        <Header colorHeader={colorHeader} openFormSignIn={openFormSignIn} />
        {getvisibleForm ? (
          <FormAccount
            closeFormAccount={closeFormAccount}
          />
        ) : (
          ""
        )}
        {children}
        <Footer />
      </div>
    </>
  );
};

export default PageWrapper;
