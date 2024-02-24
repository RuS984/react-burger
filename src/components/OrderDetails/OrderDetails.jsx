import React from "react";
import "./OrderDetails.css";

const OrderDetails = () => {
  return (
    <div className="orderDetails">
      <span className="orderNumber text text_type_digits-large">034536</span>
      <span className="text text_type_main-medium mt-8">
        идентификатор заказа
      </span>
      <div className="orderImage m-15"></div>
      <span className="text text_type_main-default mb-2">
        Ваш заказ начали готовить
      </span>
      <span className="text text_type_main-default text_color_inactive mb-30">
        Дождитесь готовности на орбитальной станции
      </span>
    </div>
  );
};

export default OrderDetails;
