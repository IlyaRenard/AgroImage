import React from "react";

const FeedBackForm = () => {
  return (
    <div>
      <h2>Обратная связь</h2>
      <input type="text" placeholder="Ваше имя" />
      <input type="text" placeholder="Эл. почта" />
      <textarea placeholder="Сообщение" cols={10} rows={30}></textarea>
    </div>
  );
};

export default FeedBackForm;
