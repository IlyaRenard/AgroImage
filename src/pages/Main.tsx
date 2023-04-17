import React from "react";
import FeedBackForm from "../components/FeedBackForm";
import Modal from "./../components/Modal";
import ProductItem from "../components/ProductItem";
import { cereals } from "../data/category";

const Main = () => {
  return (
    <div className=" bg-[url('/assets/img/pole.jpg')] bg-no-repeat bg-cover bg-center w-full h-screen">
      <div className="flex flex-col items-center justify-center mx-10 bg-white">
        <div className="p-2">
          <h2 className="text-3xl text-center">О нас</h2>
          <p className=" indent-8 mb-3 text-left">
            Добро пожаловать на главную страницу ООО АгроИмидж, вашего надежного
            дистрибьютора высококачественных семян и удобрений.
          </p>
          <p className=" indent-8 mb-3 text-left">
            Мы специализируемся на предоставлении широкого ассортимента
            продукции, включая семена кукурузы, зерновых культур, рапса, сои,
            травосмесей, микро-и макроудобрения. Несмотря на то, что мы молодая
            компания, имеющая всего трехлетний опыт работы, у нас уже есть
            хорошая репутация на рынке. Мы очень гордимся нашим исключительным
            обслуживанием клиентов, высоким качеством продукции и
            конкурентоспособными ценами.
          </p>
          <p className=" indent-8 mb-3 text-left">
            Мы тесно сотрудничаем с нашими партнерами, такими как SaatBau, Rapul
            Moldavian selection, Maysadur, Green и различные российские
            компании, таким образом гарантируя, что у нас всегда будут лучшие
            товары. Наши партнерские отношения также позволяют нам постоянно
            расширять ассортимент нашей продукции и быть в курсе последних
            тенденций в отрасли.
          </p>
          <p className=" indent-8 mb-3 text-left">
            В компании АгроИмидж каждый сотрудник верит, что сельское хозяйство
            является основой любой экономики, и мы желаем внести свой вклад в
            развитие сельскохозяйственного сектора нашей страны. Являетесь ли вы
            фермером, дистрибьютором или поставщиком товаров, мы здесь для того,
            чтобы предоставить вам лучшие продукты и услуги, которые помогут вам
            достичь ваших целей.
          </p>
          <p className=" indent-8 mb-3 text-left">
            Благодарим вас за то, что вы выбрали AgroImage в качестве своего
            партнера в сельском хозяйстве. Мы с нетерпением ждем возможности
            сотрудничать с вами!
          </p>
        </div>
        <div>
          <h2 className=" text-2xl text-center">Продукция</h2>
          <ProductItem category={cereals}/>
        </div>
        <div className="w-[50%] text-center">
          <Modal title="Обратная связь" btnText="Напишите нам"><FeedBackForm /> </Modal>
          
        </div>
      </div>
    </div>
  );
};

export default Main;
