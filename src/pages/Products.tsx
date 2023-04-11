import React, { useState } from "react";
import DropDownMenu from "../components/DropDownMenu";

const Products = () => {
  return (
    <div>
      <div className="flex flex-row justify-around mt-5">
        <div className=" border-r-2">
          <h1 className=" text-2xl border-b-2">Ассортимент</h1>
          <DropDownMenu />
        </div>
        <div>Товар</div>
      </div>
    </div>
  );
};

export default Products;
