import React from "react";
import { useParams } from "react-router-dom";
import { products } from "../data/products";

const ProductDeatils = () => {
  const params = useParams();
  const productId = params.id;
  const currentProduct = products.find((val) => val.id === productId);

  return (
    <div>
      <h2 className="mt-2 text-2xl font-bold text-center">
        {currentProduct?.title}
      </h2>
      <div></div>
      <div className="m-2 p-2">
        <span>{currentProduct?.description}</span>
      </div>
    </div>
  );
};

export default ProductDeatils;
