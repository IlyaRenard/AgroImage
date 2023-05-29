import React, { useState } from "react";
import Modal from "../components/Modal";
import FeedBackForm from "../components/FeedBackForm";

const About = () => {
  const [activeTab, setActiveTab] = useState("company");

  const handleTabChange = (tab: React.SetStateAction<string>) => {
    setActiveTab(tab);
  };

  return (
    <div>
      <h1 className="mt-5 text-2xl border-b-2 text-center">
        О КОМПАНИИ «АгроЛайф»
      </h1>
      <div className="flex flex-row mt-5">
        <div className="border-r-2">
          <ul className="ml-3 min-w-[150px] flex flex-col">
            <li className="md:ml-8 text-xl md:my-0 my-7">
              <a
                onClick={() => handleTabChange("company")}
                className={`text-gray-800 hover:text-green-400 duration-500 cursor-pointer ${
                  activeTab === "company" ? "text-green-400" : ""
                }`}
              >
                О компании
              </a>
            </li>
            <li className="md:ml-8 text-xl md:my-0 my-7">
              <a
                onClick={() => handleTabChange("partners")}
                className={`text-gray-800 hover:text-green-400 duration-500 cursor-pointer ${
                  activeTab === "partners" ? "text-green-400" : ""
                }`}
              >
                Партнёры
              </a>
            </li>
            <li className="md:ml-8 text-xl md:my-0 my-7">
              <a
                onClick={() => handleTabChange("contacts")}
                className={`text-gray-800 hover:text-green-400 duration-500 cursor-pointer ${
                  activeTab === "contacts" ? "text-green-400" : ""
                }`}
              >
                Контакты
              </a>
            </li>
          </ul>
        </div>
        <div className="p-5">
          {activeTab === "company" && (
            <div id="company">
              <p className=" indent-8 mb-3 text-left text-xl">
                Добро пожаловать на главную страницу ООО АгроИмидж, вашего
                надежного дистрибьютора высококачественных семян и удобрений.
              </p>
              <p className=" indent-8 mb-3 text-left text-xl">
                Мы специализируемся на предоставлении широкого ассортимента
                продукции, включая семена кукурузы, зерновых культур, рапса,
                сои, травосмесей, микро-и макроудобрения. Несмотря на то, что мы
                молодая компания, имеющая всего трехлетний опыт работы, у нас
                уже есть хорошая репутация на рынке. Мы очень гордимся нашим
                исключительным обслуживанием клиентов, высоким качеством
                продукции и конкурентоспособными ценами.
              </p>
              <p className=" indent-8 mb-3 text-left text-xl">
                Мы тесно сотрудничаем с нашими партнерами, такими как SaatBau,
                Rapul Moldavian selection, Maysadur, Green и различные
                российские компании, таким образом гарантируя, что у нас всегда
                будут лучшие товары. Наши партнерские отношения также позволяют
                нам постоянно расширять ассортимент нашей продукции и быть в
                курсе последних тенденций в отрасли.
              </p>
              <p className=" indent-8 mb-3 text-left text-xl">
                В компании АгроИмидж каждый сотрудник верит, что сельское
                хозяйство является основой любой экономики, и мы желаем внести
                свой вклад в развитие сельскохозяйственного сектора нашей
                страны. Являетесь ли вы фермером, дистрибьютором или поставщиком
                товаров, мы здесь для того, чтобы предоставить вам лучшие
                продукты и услуги, которые помогут вам достичь ваших целей.
              </p>
              <p className=" indent-8 mb-3 text-left text-xl">
                Благодарим вас за то, что вы выбрали AgroImage в качестве своего
                партнера в сельском хозяйстве. Мы с нетерпением ждем возможности
                сотрудничать с вами!
              </p>
              <p className=" indent-8 mb-3 text-left text-xl">
                В компании АгроИмидж каждый сотрудник верит, что сельское
                хозяйство является основой любой экономики, и мы желаем внести
                свой вклад в развитие сельскохозяйственного сектора нашей
                страны. Являетесь ли вы фермером, дистрибьютором или поставщиком
                товаров, мы здесь для того, чтобы предоставить вам лучшие
                продукты и услуги, которые помогут вам достичь ваших целей.
              </p>
              <p className=" indent-8 mb-3 text-left text-xl">
                Благодарим вас за то, что вы выбрали AgroImage в качестве своего
                партнера в сельском хозяйстве. Мы с нетерпением ждем возможности
                сотрудничать с вами!
              </p>
            </div>
          )}
          {activeTab === "partners" && (
            <div id="partners">
              <p className="indent-8 mb-3 text-left text-xl">
                Мы тесно сотрудничаем с нашими партнерами, такими как SaatBau,
                Rapul Moldavian selection, Maysadur, Green и различные
                российские компании, таким образом гарантируя, что у нас всегда
                будут лучшие товары. Наши партнерские отношения также позволяют
                нам постоянно расширять ассортимент нашей продукции и быть в
                курсе последних тенденций в отрасли.
              </p>
            </div>
          )}
          {activeTab === "contacts" && (
            <div id="contacts">
              <div>
                <h1 className="  text-2xl text-center">
                  Как с нами связаться?
                </h1>
                <p className="indent-8 mb-3 text-left text-xl">
                  Адрес: Республика Беларусь, 230003, г. Гродно, ул.
                  Понемуньская 20, каб. 22, 23, 27-29
                </p>
                <p className=" indent-8 mb-3 text-left text-xl">
                  Директор, Довбаш Светлана Михайловна: +375 (44) 592-26-22,
                  +375 (29) 234-55-65
                </p>
                <p className=" indent-8 mb-3 text-left text-xl">
                  Рабочий тел: 80152 68-30-94
                </p>
                <p className=" indent-8 mb-3 text-left text-xl">
                  Специалисты: Катковский Дмитрий +375 (29) 3977553, Совца Олег
                  +375 (29) 6673510
                </p>
                <p className=" indent-8 mb-3 text-left text-xl">
                  Юр. отдел: +375 (29) 630-59-49
                </p>
                <p className=" indent-8 mb-3 text-left text-xl">
                  По Минской области: +375 (44) 538-48-65
                </p>
              </div>
              <div className="ml-8">
                <Modal title="Обратная связь" btnText="Напишите нам">
                  <FeedBackForm />
                </Modal>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default About;
