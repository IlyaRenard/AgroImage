import { useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import DropDownMenu from "../components/DropDownMenu";
import { allCategories } from "../data/category";
import { ICategory, IProduct } from "../models/product";
import ProductItem from "./../components/ProductItem";
import { products } from "./../data/products";

const Products = () => {
  const [categories] = useState<ICategory[]>(allCategories);
  const [allProducts, setAllProducts] = useState<IProduct[]>([]);
  const { category } = useParams();
  const mainCategory = allCategories.map((val) => {
    return val.category;
  });

  useEffect(() => {
    setAllProducts(products);
  }, []);

  const filteredList = useMemo(getFilteredList, [category, allProducts]);

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
    <div className="h-screen">
      <div className="flex flex-row mt-5">
        <div className="border-r-2 m-2 w-auto">
          <h1 className=" text-2xl border-b-2 border-green-600 m-2">
            Категории
          </h1>
          {categories.map((category) => (
            <DropDownMenu category={category} key={category.id} />
          ))}
        </div>
        <div className="w-full">
          {!category ? (
            <h1 className="text-center w-full text-2xl font-bold">
              Все товары
            </h1>
          ) : (
            <h1 className="text-center w-full text-2xl font-bold">
              {category}
            </h1>
          )}

          {!filteredList.length ? (
            <h1 className="text-center text-xl mt-20">Товары не найдены :( </h1>
          ) : (
            <div className="flex flex-row flex-wrap  items-center">
              {filteredList.map((product) => (
                <ProductItem product={product} key={product.id} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Products;
