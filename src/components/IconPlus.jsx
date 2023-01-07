import React from "react";
import ImgPlus from "../assets/icons/plus.png";

function IconPlus({ handleNewExpense }) {
  return (
    <div className="w-8 fixed right-10 bottom-10 cursor-pointer">
      <img onClick={handleNewExpense} src={ImgPlus} alt="Icon-plus" />
    </div>
  );
}

export default IconPlus;
