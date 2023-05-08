import React from "react";
import { ICategory, IProduct } from "../models/product";
import { FC } from "react";

interface ProductItemProps {
  products?: IProduct;
}

const ProductItem: FC<ProductItemProps> = () => {
  return (
    <div className="relative max-w-[300px] m-3 text-center shadow-md bg-gray-200 cursor-pointer rounded-lg">
      <div className="p-2 hover:p-0">
        <img src="https://cdn2.thecatapi.com/images/qg0_IodJp.png" className="rounded-sm" />
      </div>
      <div className="absolute bottom-0 w-full bg-green-600 bg-opacity-90 rounded-b-lg">
        <span className=" font-bold text-2xl text-center">Рапс</span>
      </div>
    </div>
  );
};

export default ProductItem;
