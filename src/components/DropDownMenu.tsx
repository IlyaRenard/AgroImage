import React, { FC, useState } from "react";
import { ICategory } from "../models/product";
import { NavLink } from "react-router-dom";

interface DropDownMenuProps {
  category: ICategory;
}

const DropDownMenu: FC<DropDownMenuProps> = ({ category }) => {
  const [open, setOpen] = useState(false);

  const clickHandler = () => {
    setOpen(!open);
  };

  return (
    <div className="m-2 w-full">
      <ul className="flex flex-col mr-4">
        <li>
          <p
            onClick={clickHandler}
            className="text-xl cursor-pointer hover:font-bold hover:text-green-600 m-1 "
          >
            {category.category}
          </p>
          {open && (
            <ul>
              {category.subCategory?.map((value) => (
                <NavLink to={`/products/category/${value}`} key={value}>
                  <li
                    className=" indent-4 hover:border-b-2 border-green-600 cursor-pointer w-max"
                    key={value}
                  >
                    {value}
                  </li>
                </NavLink>
              ))}
            </ul>
          )}
        </li>
      </ul>
    </div>
  );
};

export default DropDownMenu;
