import React, { useState } from "react";
import Footer from "../../Footer/Footer";
import FormAccount from "../../FormAccount/FormAccount";
import Header from "../../Header/Header";

import style from "./PageWrapper.module.scss";

interface IPageWrapper {
  children: React.ReactNode;
  colorHeader: string
}

const PageWrapper: React.FC<IPageWrapper> = ({ children, colorHeader }: IPageWrapper) => {
  const [visibleFormAccount, setVisibleFormAccount] = useState<boolean>(false);
  const [toggleFormAccount, setToggleFormAccount] = useState<boolean>(true);

  const openFormSignIn = () => {
    setVisibleFormAccount(true);
    setToggleFormAccount(true);
  };
  const closeFormAccount = () => {
    setVisibleFormAccount(false);
  };
  return (
    <>
      <div className={style.page}>
        <Header colorHeader={colorHeader} openFormSignIn={openFormSignIn} />
        {visibleFormAccount ? (
          <FormAccount
            closeFormAccount={closeFormAccount}
            toggleFormAccount={toggleFormAccount}
            setToggleFormAccount={setToggleFormAccount}
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
