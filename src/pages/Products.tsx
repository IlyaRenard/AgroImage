import { useState } from "react";
import DropDownMenu from "../components/DropDownMenu";
import { allCategories } from "../data/category";

const Products = () => {
  const [categories, setCategories] = useState(allCategories);
  return (
    <div>
      <div className="flex flex-row justify-around mt-5">
        <div className=" border-r-2">
          <h1 className=" text-2xl border-b-2">Ассортимент</h1>
          {categories.map((category) => (
            <DropDownMenu category={category} />
          ))}
        </div>
        <div>Товар</div>
      </div>
    </div>
  );
};

export default Products;
