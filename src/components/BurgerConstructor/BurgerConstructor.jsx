import React from "react";
import BurgerConstructorElement from "./BurgerConstructorElement";
import OrderDetails from "../OrderDetails/OrderDetails";
import { useDrag, useDrop } from "react-dnd";

import {
  Button,
  CurrencyIcon,
  ConstructorElement,
} from "@ya.praktikum/react-developer-burger-ui-components";

import "./BurgerConstructor.css";

import PropTypes from "prop-types";

import propTypesburgerIngredients from "../BurgerIngredients/BurgerIngredientsPropType";
import Modal from "../Modal/Modal";

import { useDispatch, useSelector } from "react-redux";

import {
  deleteIngredient,
  dragBun,
  dragIngredient,
} from "../../services/actions/burgerConstructor";



function BurgerConstructor({ selectedIngredients }) {
  const [isOpen, setIsOpen] = React.useState(false);

  const dispatch = useDispatch();
  const { ingredientsWithoutBuns, buns } = useSelector(
    (store) => store.constructorIngredients,
  );

  const ref = React.useRef(null);

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const { orderSum } = React.useMemo(() => {
    return {
      orderSum:
        ingredientsWithoutBuns.reduce(function (sum, current) {
          return sum + current.price;
        }, 0) +
        buns.price * 2,
    };
  }, [ingredientsWithoutBuns, buns]);

  const [, dropIngredient] = useDrop({
    accept: "ingredients",
    collect: (monitor) => ({
      isHover: monitor.isOver(),
    }),
    drop(item) {
      console.log("dropIngredient drop");
      let ingredient = item.item;
      ingredient.type === "bun"
        ? dispatch(dragBun(ingredient))
        : dispatch(dragIngredient(ingredient));
    },
  });

  const [, dropSort] = useDrop({
    accept: "sortIngredients",
    collect: (monitor) => ({
      isHover: monitor.isOver(),
    }),
    drop(item) {
      console.log("sortIngredients drop");
      // let ingredient = item.item;
      // ingredient.type === "bun"
      //   ? dispatch(dragBun(ingredient))
      //   : dispatch(dragIngredient(ingredient));
    },
  });

  const dragDropRef = dropIngredient(dropSort(ref));

  return (
    <div className="flexcolumn pt-25" ref={ dragDropRef}>
      <div className="ml-8 pl-6">
        <ConstructorElement
          type="top"
          isLocked={true}
          text={buns.name}
          price={buns.price}
          thumbnail={buns.image_mobile}
        />
      </div>
      <div className="modifedscroll contentwrapbc">
        {!!ingredientsWithoutBuns.length &&
          ingredientsWithoutBuns.map((ingredient, index) => (
            <BurgerConstructorElement
              type={undefined}
              isLocked={false}
              text={ingredient.name}
              price={ingredient.price}
              thumbnail={ingredient.image_mobile}
              key={"" + index + ingredient._id}
              handleClose={() => dispatch(deleteIngredient(ingredient))}
            />
          ))}
      </div>
      <div className="ml-8 pl-6">
        <ConstructorElement
          type="bottom"
          isLocked={true}
          text={buns.name}
          price={buns.price}
          thumbnail={buns.image_mobile}
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
