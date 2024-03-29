import { FC, useState } from "react";
import { NavLink } from "react-router-dom";
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
          <p
            onClick={clickHandler}
            className="text-2xl cursor-pointer hover:font-bold hover:text-green-600 m-1 "
          >
            {category.category}
          </p>
          {open && (
            <ul>
              {category.subCategory?.map((value) => (
                <NavLink to={`/category/${value}`} key={value}>
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
