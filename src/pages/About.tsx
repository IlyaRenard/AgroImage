import React, { useState } from "react";

const About = () => {
  const [company, setCompany] = useState(true);
  const [partners, setPartners] = useState(false);
  const [contacts, setContacts] = useState(false);

  const companyHandler = () => {
    setCompany(true);
    setPartners(false);
    setContacts(false);
  };

  const partnersHandler = () => {
    setCompany(false);
    setPartners(true);
    setContacts(false);
  };

  const contactsHandler = () => {
    setCompany(false);
    setPartners(false);
    setContacts(true);
  };

  return (
    <div className="">
      <h1 className=" text-2xl border-b-2 text-center">
        О КОМПАНИИ «АгроЛайф»
      </h1>
      <div className="flex flex-row justify-around mt-5">
        <div className=" border-r-2">
          <ul className=" ml-3 min-w-[150px] flex flex-col ">
            <li className="md:ml-8 text-xl md:my-0 my-7">
              <a
                onClick={companyHandler}
                className="text-gray-800 hover:text-green-400 duration-500 cursor-pointer"
              >
                О компании
              </a>
            </li>

            <li className="md:ml-8 text-xl md:my-0 my-7">
              <a
                onClick={partnersHandler}
                className="text-gray-800 hover:text-green-400 duration-500 cursor-pointer"
              >
                Партнёры
              </a>
            </li>
            <li className="md:ml-8 text-xl md:my-0 my-7">
              <a
                onClick={contactsHandler}
                className="text-gray-800 hover:text-green-400 duration-500 cursor-pointer"
              >
                Контакты
              </a>
            </li>
          </ul>
        </div>
        <div className="p-5">
          {company && (
            <div id="company">
              <p className=" indent-8 mb-3 text-left">
                Общество с ограниченной ответственностью «АгроЛайф», основанное
                в сентябре 2015 года, является поставщиком средств защиты
                растений мировых компаний: BASF, создающей химию уже на
                протяжении 150 лет.
              </p>
              <p className=" indent-8 mb-3 text-left">
                BASF, создающей химию уже на протяжении 150 лет. За счет
                применения инновационных решений и учета потребностей клиентов,
                технологии обеспечивают выращивание зерновых, отличающихся
                большим здоровьем, силой и устойчивостью к таким стрессовым
                факторам как жаре, засухе и другим.
              </p>
              <p className=" indent-8 mb-3 text-left">
                ADAMA (Makhteshim Agan Industries Ltd. ранее) – один из ведущих
                мировых производителей и поставщиков брендовых непатентных
                средств защиты растений (СЗР) и других продуктов химической
                промышленности.
              </p>
              <p className=" indent-8 mb-3 text-left">
                Мы являемся официальным представителем SYNGENTA в РБ,
                швейцарской компании, одной из лидеров в области производства
                средств защиты растений и семеноводства.
              </p>
              <p className=" indent-8 mb-3 text-left">
                Компания «АгроЛайф» уделяет особое внимание семенам полевых
                культур (озимый и яровой рапс, кукуруза, зерновые культуры,
                горох, бобы) и кормовым смесям. С целью повышения урожайности
                основных сельскохозяйственных культур Беларуси, мы организуем
                поставки семян от лучших производителей мировой селекции.
              </p>
              <p className=" indent-8 mb-3 text-left">
                «АгроЛайф» является официальным дистрибьютором RAPOOL,
                представляющей интересы ведущих немецких селекционных компаний:
                NPZ Lembke, Deutsche Saatveredelung AG, Saaten Union GmbH,
                производящих семена озимого и ярового рапса, озимых и яровых
                зерновых, и других сельскохозяйственных культур.
              </p>
              <p className=" indent-8 mb-3 text-left">
                ООО «АгроЛайф» является поставщиком семян кукурузы и рапса
                SAATBAU LINZ (Австрия) компанией со 70-летней историей и мировым
                именем.
              </p>
              <p className=" indent-8 mb-3 text-left">
                Тесное сотрудничество с Молдавией и Украиной позволяет
                поставлять семена молдавской и украинской селекций,
                соответственно.
              </p>
              <p className=" indent-8 mb-3 text-left">
                Официальные партнеры компании «БТУ-Центр» ― украинский
                производитель микробных и ферментных препаратов для сельского
                хозяйства. Продукция компании разрешена к использованию в
                органическом земледелии, что подтверждается сертификатом Organic
                Standard.
              </p>
              <p className=" indent-8 mb-3 text-left">
                Также мы являемся официальным диллером микроудобрений компании
                Dr. Green на территории Республики Беларусь.
              </p>
              <p className=" indent-8 mb-3 text-left">
                Мы рады сотрудничать с каждым, кто заинтересован в нашей
                продукции. Только присоединившись к числу наших клиентов, вы
                оцените все выгоды сотрудничества с нашей компанией. Спасибо за
                посещение нашего сайта!
              </p>
            </div>
          )}
          {partners && (
            <div id="partners">
              <p className=" indent-8 mb-3 text-left">
                ООО «АгроЛайф» является официальным дистрибьютером ведущих
                мировых компаний. Мы рады сотрудничать с каждым, кто
                заинтересован в нашей продукции. Только присоединившись к числу
                наших клиентов, вы оцените все выгоды сотрудничества с нашей
                компанией.
              </p>
            </div>
          )}
          {contacts && (
            <div id="contacts">
              <p className=" indent-8 mb-3 text-left">
                КАК С НАМИ СВЯЗАТЬСЯ? Адрес: Республика Беларусь, 230003, г.
                Гродно, ул. Понемуньская 20, каб. 22, 23, 27-29 Директор, Довбаш
                Светлана Михайловна: +375 (44) 592-26-22, +375 (29) 234-55-65
                Рабочий тел: 80152 68-30-94 Специалисты: Катковский Дмитрий +375
                (29) 3977553, Совца Олег +375 (29) 6673510 Юр. отдел: +375 (29)
                630-59-49 По Минской области: +375 (44) 538-48-65
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default About;
