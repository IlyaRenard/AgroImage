import React from "react";

const FeedBackForm = () => {
  const sBord: string = ' border-2 border-solid border-gray-300 '
  return (
    <form className="min-w-fit w-4/12 h-80 p-3 flex flex-col gap-2">
      <h2 className="mb-5 uppercase text-3xl">Обратная связь</h2>
      <div className='flex gap-2'>
        <input className={sBord+"w-1/2 p-2 outline-0"} type="text" placeholder="Ваше имя" />
        <input className={sBord+"w-1/2 p-2 outline-0"} type="email" placeholder="Эл. почта" />
      </div>
      <textarea className={sBord+"p-2 border-2 outline-0 resize-none"} placeholder="Сообщение" cols={10} rows={30}></textarea>
      <div className='flex gap-2 justify-between'>
        <div className={sBord+'flex gap-2 px-6 text-2xl text-green-500'}>nmdaf</div>
        <input className={sBord+"w-1/2 p-2 outline-0"} type="text" placeholder="Введите символы" />
        <button className={sBord+"py-2 px-6 font-semibold hover:border-green-700 text-gray-500 hover:text-green-700"} type="submit">Отправить</button>
      </div>
    </form>
  );
};

export default FeedBackForm;
