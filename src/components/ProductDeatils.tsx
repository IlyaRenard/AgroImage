import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { products } from "../data/products";
import { ICategory, IProduct } from "../models/product";
import { allCategories } from "../data/category";
import DropDownMenu from "./DropDownMenu";

const ProductDeatils = () => {
  const params = useParams();
  const productId = params.id;
  const currentProduct = products.find((val) => val.id === productId);
  const [categories] = useState<ICategory[]>(allCategories);
  const [allProducts, setAllProducts] = useState<IProduct[]>([]);
  const { category } = useParams();
  const mainCategory = allCategories.map((val) => {
    return val.category;
  });

  useEffect(() => {
    setAllProducts(products);
  }, []);


  function getFilteredList() {
    if (!category) {
      return allProducts;
    }
    if (mainCategory.includes(category)) {
      return allProducts.filter(
        (product) => product.category.category === category
      );
    }
    return allProducts.filter(
      (product) => product.category.subCategory?.toString() === category
    );
  }

  return (
    <div className="flex flex-row mt-5">
      <div className="border-r-2 m-2 w-auto">
        <h1 className=" text-2xl border-b-2 border-green-600 m-2">Категории</h1>
        {categories.map((category) => (
          <DropDownMenu category={category} key={category.id} />
        ))}
      </div>
      <div>
        <h2 className="mt-2 text-2xl font-bold text-center">
          {currentProduct?.title}
        </h2>
        <div></div>
        <div className="m-2 p-2">
          <span>{currentProduct?.description}</span>
        </div>
      </div>
    </div>
  );
};

export default ProductDeatils;
