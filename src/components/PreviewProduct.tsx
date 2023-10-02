import { FC } from "react";
import { NavLink } from "react-router-dom";
import { ICategory } from "../models/product";

interface PreviewProductProps {
  category: ICategory;
}

const PreviewProduct: FC<PreviewProductProps> = ({ category }) => {
  return (
    <div
      className="relative rounded-full bg-cover border-2 hover:scale-105 hover:bg-green-600 hover:bg-[url('/assets/img/phenica.png')] w-[200px] h-[200px] m-3"
      style={{
        backgroundImage: `url(${category.img})`,
      }}
    >
      <NavLink to={`/category/${category.category}`} key={category.id}>
        <div>
          <h2 className="transition absolute top-1/3 right-0 left-0 bottom-0 text-gray-100 font-bold p-3 text-2xl  text-center uppercase hover:scale-110 hover:-translate-y-1 cursor-pointer">
            {category.category}
          </h2>
        </div>
      </NavLink>
    </div>
  );
};

export default PreviewProduct;
