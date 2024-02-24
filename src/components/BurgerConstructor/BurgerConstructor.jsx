import React from "react";
import BurgerConstructorElement from "./BurgerConstructorElement";
import OrderDetails from "../OrderDetails/OrderDetails";

import {
  Button,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";

import "./BurgerConstructor.css";

import PropTypes from "prop-types";

import propTypesburgerIngredients from "../BurgerIngredients/BurgerIngredientsPropType";
import Modal from "../Modal/Modal";

function BurgerConstructor({ selectedIngredients }) {
  const [isOpen, setIsOpen] = React.useState(false);

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const orderSum =
    selectedIngredients !== undefined
      ? selectedIngredients.reduce(function (sum, current) {
          return sum + current.price;
        }, 0)
      : 0;

  const topBun =
    selectedIngredients !== undefined ? selectedIngredients[0] : null;
  const bottomBun =
    selectedIngredients !== undefined
      ? selectedIngredients[selectedIngredients.lenglth - 1]
      : null;
  const middleIngredients =
    selectedIngredients !== undefined ? selectedIngredients.slice(1, -1) : [];

  return (
    <div style={{ display: "flex", "flex-direction": "column" }}>
      <div className="pt-25 " />
      <BurgerConstructorElement
        type="top"
        isLocked={true}
        text={topBun.name}
        price={topBun.price}
        thumbnail={topBun.image_mobile}
      />
      <div className="modifedscroll contentwrap">
        {!!selectedIngredients.length &&
          selectedIngredients.map((selectedIngredient, index) => (
            <BurgerConstructorElement
              type={undefined}
              isLocked={false}
              text={selectedIngredient.name}
              price={selectedIngredient.price}
              thumbnail={selectedIngredient.image_mobile}
              key={"" + index + selectedIngredient._id}
            />
          ))}
      </div>
      <BurgerConstructorElement
        type="bottom"
        isLocked={true}
        text={topBun.name}
        price={topBun.price}
        thumbnail={topBun.image_mobile}
      />
      <div className="flex_bottomright">
        <span className="flexcentered mt-10">
          <span className="pr-10 flexcentered text text_type_digits-default">
            {orderSum}
            <CurrencyIcon type="primary" />
          </span>
          <Button
            htmlType="button"
            type="primary"
            size="large"
            onClick={() => handleOpenModal()}
          >
            Оформить заказ
          </Button>
        </span>
      </div>
      {isOpen && (
        <Modal
          isOpenModal={handleOpenModal}
          handleClickClose={handleCloseModal}
        >
          {" "}
          <OrderDetails />{" "}
        </Modal>
      )}
    </div>
  );
}

BurgerConstructor.propTypes = {
  selectedIngredients: PropTypes.arrayOf(propTypesburgerIngredients.isRequired)
    .isRequired,
};

export default BurgerConstructor;
