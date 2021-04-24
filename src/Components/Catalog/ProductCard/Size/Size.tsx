import React, { FC } from "react";

import style from "./Size.module.scss";

interface ISize {
  size: { id: number; size: string };
  selectSize: (id: number) => void;
  selectedSize: number;
}

const Size: FC<ISize> = ({ size, selectSize, selectedSize }: ISize) => {
  return (
    <div className={style.item}>
      <button
        onClick={() => {
          selectSize(size.id);
        }}
        type="button"
        className={style.button}
        id="button">
        {size.size}
      </button>
      <span
        className={`${style.border} ${
          selectedSize === size.id ? style.active : ""
        }`}
      />
    </div>
  );
};

export default Size;
