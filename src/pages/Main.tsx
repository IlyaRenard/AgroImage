import { useState } from "react";
import FeedBackForm from "../components/FeedBackForm";
import PreviewProduct from "../components/PreviewProduct";
import {  allCategories } from "../data/category";
import Modal from "./../components/Modal";

const Main = () => {
  const [categorys, setCategory] = useState(allCategories)
  return (
    <div className="bg-[url('/assets/img/pole.jpg')] bg-fixed  bg-no-repeat bg-cover bg-center w-full h-screen">
      <div>
      <div className="flex flex-col items-center justify-center absolute  drop-shadow-2xl top-96 md:top-80 bg-opacity-90 rounded-xl mx-10 bg-white">
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
          <div className="flex md:flex-row flex-col flex-wrap">
            {categorys.map(category=> <PreviewProduct category={category} />)}
            
          </div>
        </div>
        <div className="w-[50%] text-center">
          <Modal title="Обратная связь" btnText="Напишите нам">
            <FeedBackForm />
          </Modal>
        </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2364.2554508463068!2d23.868176376700053!3d53.660246872382004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dfd654c38c2d6b%3A0xf2456d3e371d063!2z0YPQuy4g0J_QvtC90LXQvNGD0L3RjNGB0LrQsNGPIDIwLCDQk9GA0L7QtNC90L4gMjMwMDAz!5e0!3m2!1sru!2sby!4v1681811529648!5m2!1sru!2sby"
          className=" border-0 w-full h-[500px] m-3 p-2"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      </div>
      
    </div>
  );
};

export default Main;
