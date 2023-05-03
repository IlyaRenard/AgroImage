import React from "react";

const Footer = () => {
  return (
    <footer className="static bottom-0 left-0 h-[200px]  w-full flex justify-center bg-zinc-900 text-yellow-50">
      <div className="container p-16">
        <div className="flex justify-around gap-2">
          <div className="w-60 text-sm">© ОБЩЕСТВО С ОГРАНИЧЕННОЙ ОТВЕТСТВЕННОСТЬЮ<br />«АгроИмидж»</div>
          <div>Контакты: <br />230005, г. Гродно, ул. Понемуньская, 20, каб.21<br />Тел/факс 80152625685, Моб +375333025813, tatjanabejduk@mail.ru</div>
          <div className="w-80">УНП 591033745 р/с BY55OLMP 3012 6000 3302 3000 0933<br />БИК OLMPBY2X в ОАО «Белгазпромбанк» г. Минск, ул. Притыцкого 60/2</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;