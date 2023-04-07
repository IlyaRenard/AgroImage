import React from "react";

const About = () => {
  return (
    <div className="">
      <h1 className=" text-2xl border-b-2 text-center">
        О КОМПАНИИ «АгроЛайф»
      </h1>
      <div className="flex flex-row justify-around mt-5">
        <div className=" border-r-2">
          <ul className=" ml-3 min-w-[130px] flex flex-col ">
            <li>О компании</li>
            <li>Партнёры</li>
            <li>Контанты</li>
          </ul>
        </div>
        <div className="p-5">
          <p className=" indent-8 mb-3 text-left text-gray-500 dark:text-gray-400">
            Общество с ограниченной ответственностью «АгроЛайф», основанное в
            сентябре 2015 года, является поставщиком средств защиты растений
            мировых компаний: BASF, создающей химию уже на протяжении 150 лет.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
