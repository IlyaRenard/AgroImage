import React from "react";

const Products = () => {


  return (
    <div>
      <div className="flex flex-row justify-around mt-5">
        <div className=" border-r-2">
          <h1 className=" text-2xl border-b-2">Ассортимент</h1>
          <ul>
            <li>Кукуруза</li>
            <li>Соя</li>
            <li>Зерновые</li>
            <li>Рапс</li>
            <li>Травы</li>
          </ul>
        </div>
        <div>Товар</div>
      </div>
    </div>
  );
};

export default Products;
