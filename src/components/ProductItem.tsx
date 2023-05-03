import React from "react";
import { ICategory, IProduct } from "../models/product";
import { FC } from "react";

interface ProductItemProps {
  products:IProduct;
  category: ICategory;
}

const ProductItem: FC<ProductItemProps> = ({products}) => {
  return (
    <div className="relative">
      <div className="product-item-img">
      </div>
      <div className="product-item-title"></div>
    </div>
  );
};

export default ProductItem;
