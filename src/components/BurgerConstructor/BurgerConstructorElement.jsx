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
}) => (
  <div className="pt-4 pb-4">
    <span className="flexcentered">
      <div className="mr-6">
        <DragIcon type="primary" />
      </div>
      <ConstructorElement
        type={type}
        isLocked={isLocked}
        text={text}
        price={price}
        thumbnail={thumbnail}
      />
    </span>
  </div>
);

export default BurgerConstructorElement;
