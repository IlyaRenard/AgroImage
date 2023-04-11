import React, { useState } from "react";
import { category } from "../data/category";

const DropDownMenu = () => {
  const [categorys, setCategorys] = useState(category);

  const [open, setOpen] = useState(false);

  const clickHandler = () => {
    setOpen(!open);
  };

  return (
    <div>
      {categorys.map((category) => (
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
                {category.value.map((value) => (
                  <li className=" indent-4 hover:border-b-2 border-green-300 cursor-pointer">
                    {value}
                  </li>
                ))}
              </ul>
            )}
          </li>
        </ul>
      ))}
    </div>
  );
};

export default DropDownMenu;
