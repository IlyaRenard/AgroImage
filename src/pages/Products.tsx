import { useState } from "react";
import DropDownMenu from "../components/DropDownMenu";
import { allCategories } from "../data/category";
import ProductItem from './../components/ProductItem';

const Products = () => {
  const [categories, setCategories] = useState(allCategories);
  return (
    <div>
      <div className="flex flex-row justify-around mt-5">
        <div className=" border-r-2 m-2">
          <h1 className=" text-2xl border-b-2 m-2">Категории</h1>
          {categories.map((category) => (
            <DropDownMenu category={category} />
          ))}
        </div>
        <div className="flex flex-row flex-wrap justify-around items-center">
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
        </div>
      </div>
    </div>
  );
};

export default Products;
