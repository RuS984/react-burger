import React from "react";
import BurgerConstructorElement from "./BurgerConstructorElement";
import OrderDetails from "../OrderDetails/OrderDetails";

import {
  Button,
  CurrencyIcon,
  ConstructorElement,
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

  const { bun, ingredients, orderSum } = React.useMemo(() => {
    return {
      bun: selectedIngredients.find((item) => item.type === "bun"),
      ingredients: selectedIngredients.filter((item) => item.type !== "bun"),
      orderSum: selectedIngredients.reduce(function (sum, current) {
        return sum + current.price;
      }, 0)
    };
  }, [selectedIngredients]);

  return (
    <div className="flexcolumn pt-25">
      <div className="ml-8 pl-6">
        <ConstructorElement
          type="top"
          isLocked={true}
          text={bun.name}
          price={bun.price}
          thumbnail={bun.image_mobile}
        />
      </div>
      <div className="modifedscroll contentwrapbc">
        {!!ingredients.length &&
          ingredients.map((ingredients, index) => (
            <BurgerConstructorElement
              type={undefined}
              isLocked={false}
              text={ingredients.name}
              price={ingredients.price}
              thumbnail={ingredients.image_mobile}
              key={"" + index + ingredients._id}
            />
          ))}
      </div>
      <div className="ml-8 pl-6">
        <ConstructorElement
          type="bottom"
          isLocked={true}
          text={bun.name}
          price={bun.price}
          thumbnail={bun.image_mobile}
        />
      </div>
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
        <Modal handleClickClose={handleCloseModal}>
          <OrderDetails />
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
