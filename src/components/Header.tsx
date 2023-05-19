import React, { useMemo, useState } from "react";
import { IonIcon } from "react-ion-icon";
import { IProduct } from "../models/product";
import { products } from "../data/products";
import { NavLink } from "react-router-dom";

const Header = () => {
  const links = [
    { name: "Главная", link: "/" },
    { name: "Продукция", link: "/products" },
    { name: "О нас", link: "/about" },
    { name: "Инфа", link: "/" },
  ];

  const [open, setOpen] = useState(false);
  const [allProducts, setAllProducts] = useState<IProduct[]>(products);
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearch, setIsSearch] = useState(false);

  const searchingList = useMemo(getSearchedList, [searchQuery, allProducts]);

  function getSearchedList() {
    return allProducts.filter((product) =>
      product.title.toLowerCase().includes(searchQuery)
    );
  }

  const clickHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSearch(true);
    console.log(searchingList);
  };

  const searchHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="shadow-md drop-shadow-2xl w-full  bg-opacity-90 z-[999999]">
      <div className="flex md:items-center md:justify-between content-start bg-white opacity-90 py-1 md:px-10 px-7">
        <div className="font-bold text-2xl cursor-pointer flex items-center text-gray-800 ">
          <span className="mr-1 pt-1">
            <img
              src=".\logo.png"
              className="mr-1 max-h-20 w-max-20 "
              alt="AgroImage"
            />
          </span>
        </div>

        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static md:z-[-1] bg-white z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 
          transition-all duration-500 ease-in ${
            open ? "top-20 " : "top-[-490px]"
          }`}
        >
          {links.map((link) => (
            <li key={link.name} className="md:ml-8 text-xl md:my-0 my-7">
              <a
                href={link.link}
                className="text-gray-800 hover:text-green-600 duration-500"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        <form className="flex items-center" onSubmit={clickHandler}>
          <div className="relative w-full">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                aria-hidden="true"
                className="w-5 h-5 text-gray-500"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>

            <input
              type="text"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg md:w-full w-[80%] box-border block  pl-10 p-2"
              placeholder="Поиск..."
              value={searchQuery}
              onChange={searchHandler}
              required
            />
          </div>
        </form>
        {isSearch && (
          <div className="fixed top-24 right-10 bg-gray-400 w-[15%] z-[9999999]">
            <ul>
              {searchingList.map((product) => (
                <li key={product.id} className="m-1 p-1">
                  <NavLink to={`/products/${product.id}`}>
                    {product.title}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        )}

        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-4 top-7 cursor-pointer md:hidden"
        >
          <IonIcon name={open ? "close" : "menu"} />
        </div>
      </div>
    </div>
  );
};

export default Header;
