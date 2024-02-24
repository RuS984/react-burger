import React from "react";
import {
  ConstructorElement,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";

const BurgerConstructorElement = ({
  type,
  isLocked,
  text,
  price,
  thumbnail,
  key,
}) => (
  <div style={{ display: "flex" }} className="p-4 ">
    <span className="flexcentered">
      <DragIcon type="primary" />
      <ConstructorElement
        type={type}
        isLocked={isLocked}
        text={text}
        price={price}
        thumbnail={thumbnail}
        key={key}
      />
    </span>
  </div>
);

export default BurgerConstructorElement;
