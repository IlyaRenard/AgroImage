import { FC } from "react";
import { NavLink } from "react-router-dom";
import { IProduct } from "../models/product";

interface ProductItemProps {
  product: IProduct;
}

const ProductItem: FC<ProductItemProps> = ({ product }) => {
  return (
    <div className=" max-w-[300px] m-3 text-center shadow-md bg-gray-200 cursor-pointer rounded-lg">
      <NavLink to={`/products/${product.id}`}>
        <div className="hover:p-0 relative p-1 h-[200px]">
          {!product.image ? (
            <img
              src="https://cdn2.thecatapi.com/images/qg0_IodJp.png"
              className="rounded-sm w-full h-full object-contain"
            />
          ) : (
            <img src={product.image} className="rounded-sm w-full h-full object-contain" />
          )}
        </div>
        <div className=" bottom-0 w-full bg-green-600 rounded-b-lg z-10">
          <span className=" font-bold text-2xl text-center text-white">
            {product.title}
          </span>
        </div>
      </NavLink>
    </div>
  );
};

export default ProductItem;
