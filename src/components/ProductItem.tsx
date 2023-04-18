import React from "react";
import { ICategory } from "../models/product";
import { FC } from "react";

interface ProductItemProps {
  category: ICategory;
}

const ProductItem: FC<ProductItemProps> = ({ category }) => {
  return (
    <div className="relative rounded-full bg-[url('/assets/img/pole.jpg')]  hover:scale-105 hover:bg-green-600 hover:bg-[url('/assets/img/phenica.png')] w-[200px] h-[200px] m-3">
      <div>
        <h2 className="transition absolute top-1/3 right-0 left-0 bottom-0 text-white p-3 text-center uppercase hover:scale-110 hover:-translate-y-1 cursor-pointer">
          {category.category}
        </h2>
      </div>
    </div>
  );
};

export default ProductItem;
