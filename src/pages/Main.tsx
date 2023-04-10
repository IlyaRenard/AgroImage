import React from "react";

const Main = () => {
  return (
    <div className=" bg-[url('/assets/img/pole.jpg')] bg-no-repeat bg-cover bg-center w-full h-screen">
      <div className="flex flex-col items-center justify-center mx-10 bg-white opacity-90">
        <div>
          <h2 className=" text-2xl text-center">О нас</h2>
          <p>
            Общество с ограниченной ответственностью «АгроЛайф» является
            официальным дистрибьютором ведущих мировых компаний: BASF, SYNGENTA,
            ADAMA и ФРАНДЕСА. А также уделяет особое внимание семенам полевых
            культур и кормовым смесям, сотрудничая с топовыми международными
            компаниями: RAPOOL, SAATBAU LINZ, Dr. Green и др.
          </p>
        </div>
        <div>
          <h2 className=" text-2xl text-center">Продукция</h2>
        </div>
        <div>
          <h2 className=" text-2xl text-center">Форма обратной связи</h2>
        </div>
      </div>
    </div>
  );
};

export default Main;
