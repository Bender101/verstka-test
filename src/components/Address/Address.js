import './Address.css'
import React from "react";

const Address = ({changeStatus}) => {

  

  return (
    <div className="address-input">
      <form className="address-form">
      <div className="marker">
        <img src="/img/vector/marker2.png" />
      </div>
        <input className="input" placeholder="Введите адрес доставки" type="text"></input>
        <button onClick={changeStatus}>&nbsp;&nbsp;<img src="/img/vector/X.png"/></button>
      </form>
    </div>
  );
};

export default Address;
