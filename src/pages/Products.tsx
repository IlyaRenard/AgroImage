import { useState } from "react";
import DropDownMenu from "../components/DropDownMenu";
import { allCategories } from "../data/category";
import ProductItem from "./../components/ProductItem";
import { products } from "./../data/products";

const Products = () => {
  const [categories] = useState(allCategories);
  const [allProducts] = useState(products);
  return (
    <div>
      <div className="flex flex-row justify-around mt-5">
        <div className=" border-r-2 m-2">
          <h1 className=" text-2xl border-b-2 m-2">Категории</h1>
          {categories.map((category) => (
            <DropDownMenu category={category} key={category.id}/>
          ))}
        </div>
        <div className="flex flex-row flex-wrap justify-around items-center">
          {allProducts.map((product) => (
            <ProductItem product={product} key={product.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
