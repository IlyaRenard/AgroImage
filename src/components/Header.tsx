import React, { useState } from "react";
import { IonIcon } from "react-ion-icon";

const Header = () => {
  const links = [
    { name: "Главная", link: "/" },
    { name: "Продукция", link: "/products" },
    { name: "О нас", link: "/about" },
    { name: "Инфа", link: "/" },
  ];

  const [open, setOpen] = useState(false);

  const clickHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Поиск");
  };

  return (
    <div className="shadow-md w-full static top-0 left-0">
      <div className="flex md:items-center md:justify-between content-start bg-white opacity-90 py-4 md:px-10 px-7">
        <div className="font-bold text-2xl cursor-pointer flex items-center text-gray-800 ">
          <span className="mr-1 pt-2">
            <img
              src=".\logo.png"
              className="mr-3 h-13 sm:h-14"
              alt="AgroImage"
            />
          </span>
        </div>

        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 
          transition-all duration-500 ease-in ${
            open ? "top-20 " : "top-[-490px]"
          }`}
        >
          {links.map((link) => (
            <li key={link.name} className="md:ml-8 text-xl md:my-0 my-7">
              <a
                href={link.link}
                className="text-gray-800 hover:text-gray-400 duration-500"
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
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg md:w-full box-border block  pl-10 p-2"
              placeholder="Поиск..."
              required
            />
          </div>
        </form>
        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
        >
          <IonIcon name={open ? "close" : "menu"} />
        </div>
      </div>
    </div>
  );
};

export default Header;
