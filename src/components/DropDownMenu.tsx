import React, { FC, useState } from "react";
import { ICategory } from "../models/product";

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
          <a
            onClick={clickHandler}
            className="text-xl cursor-pointer hover:font-bold "
          >
            {category.category}
          </a>
          {open && (
            <ul>
              {category.subCategory?.map((value) => (
                <li className=" indent-4 hover:border-b-2 border-green-300 cursor-pointer" key={category.id}>
                  {value}
                </li>
              ))}
            </ul>
          )}
        </li>
      </ul>
    </div>
  );
};

export default DropDownMenu;
