// #region Import Modules
import React from "react";

import { useSelector } from "react-redux";

// #endregion
// #region Styles
import style from "./OrderDetails.module.css";

// #endregion

const OrderDetails = () => {
  const { orderNumber, isProcceed, isError, error } = useSelector(
    (store) => store.order,
  );

  return (
    <div className={`${style.orderDetails}`}>
      {!isProcceed && !isError ? (
        <span className={`${style.orderNumber} text text_type_digits-large`}>
          {orderNumber}
        </span>
      ) : (
        <p className="text_type_main-default">
          {" "}
          Ошибка при формировании заказа: {error}
        </p>
      )}
      <span className="text text_type_main-medium mt-8">
        идентификатор заказа
      </span>
      <div className={`${style.orderImage} m-15`}></div>
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
