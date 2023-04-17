import React from "react";
import { ICategory } from "../models/product";
import { FC } from "react";

interface ProductItemProps {
  category: ICategory;
}

const ProductItem: FC<ProductItemProps> = ({ category }) => {
  return (
    <div className="flex justify-center items-center rounded-full bg-[url('/assets/img/pole.jpg')]  w-[200px] h-[200px] m-3">
      <div>
        <h2 className="transition text-white p-3 text-center uppercase hover:scale-110 hover:-translate-y-1 cursor-pointer">
          {category.category}
        </h2>
      </div>
    </div>
  );
};

export default ProductItem;
