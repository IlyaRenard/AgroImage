import React from "react";

const FeedBackForm = () => {
  return (
    <form >
      <input
        type="text"
        placeholder="Ваше имя"
        className="bg-gray-50 border my-2 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5"
      />
      <input
        type="text"
        placeholder="Эл. почта"
        className="bg-gray-50 border my-2 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5"
      />
      <textarea
        rows={4}
        className="block p-2.5 w-full my-2 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Сообщение"
      ></textarea>
      <button className="py-3 px-5 text-sm my-2 font-medium text-center rounded-lg bg-green-500 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300">
        Отправить
      </button>
    </form>
  );
};

export default FeedBackForm;
