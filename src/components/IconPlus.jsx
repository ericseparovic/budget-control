import React from "react";
import ImgPlus from "../assets/icons/plus.png";

function IconPlus({ handleNewExpense }) {
  return (
    <div className="w-12 sticky bottom-10 top-44 left-full cursor-pointer p-2">
      <img onClick={handleNewExpense} src={ImgPlus} alt="Icon-plus" />
    </div>
  );
}

export default IconPlus;
