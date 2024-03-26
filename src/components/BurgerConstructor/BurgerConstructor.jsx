// #region Styles
import style from "./BurgerConstructor.module.css";
// #endregion

// #region Import Modules
import {
  Button,
  ConstructorElement,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import React from "react";
import { useDrop } from "react-dnd";
import { useDispatch, useSelector } from "react-redux";
// #endregion

// #region Import App components
import Modal from "../Modal/Modal";
import OrderDetails from "../OrderDetails/OrderDetails";
import BurgerConstructorElement from "./BurgerConstructorElement";
// #endregion

// #region Import Redux elements
import {
  deleteIngredient,
  dragBun,
  dragIngredient,
} from "../../services/actions/burgerConstructor";
import { submitOrder } from "../../services/actions/order";
// #endregion

function BurgerConstructor() {
  // #region Redux logic
  const dispatch = useDispatch();
  const { ingredientsWithoutBuns, buns } = useSelector(
    (store) => store.constructorIngredients,
  );
  // #endregion

  const [isOpen, setIsOpen] = React.useState(false);

  const ref = React.useRef(null);

  // #region React DnD
  const [, dropIngredient] = useDrop({
    accept: "ingredients",
    collect: (monitor) => ({
      isHover: monitor.isOver(),
      hoveredItem: monitor.getItem(),
    }),
    drop(item, monitor) {
      if (!ref.current) {
        return;
      }

      let ingredient = item.item;
      const dragId = ingredient.id;

      if (dragId === undefined) {
        ingredient.type === "bun"
          ? dispatch(dragBun(ingredient))
          : dispatch(dragIngredient(ingredient, ingredientsWithoutBuns.length));
        return;
      }
    },
  });

  const dragDropRef = dropIngredient(ref);
  // #endregion

  const { orderSum } = React.useMemo(() => {
    let bunsPrice = buns.price === undefined ? 0 : buns.price * 2;
    return {
      orderSum:
        ingredientsWithoutBuns.reduce(function (sum, current) {
          return sum + current.price;
        }, 0) + bunsPrice,
    };
  }, [ingredientsWithoutBuns, buns]);

  // #region Handlers
  const handleCloseModal = () => {
    setIsOpen(false);
  };

  const submitOrderHandler = () => {
    dispatch(submitOrder([...ingredientsWithoutBuns, buns]));
    setIsOpen(true);
  };
  // #endregion

  return (
    <div className={`${style.flexcolumn} pt-25`} ref={dragDropRef}>
      <div className="ml-8 pl-6">
        {buns.price === undefined ? (
          <p
            className={`${style.flexjustifycentered} ml-1 text_type_main-default`}
          >
            {" "}
            Добавьте булочку
          </p>
        ) : (
          <ConstructorElement
            type="top"
            isLocked={true}
            text={buns.name + " верх"}
            price={buns.price}
            thumbnail={buns.image_mobile}
          />
        )}
      </div>
      <div className={`${style.contentwrapbc} modifedscroll`}>
        {!ingredientsWithoutBuns.length ? (
          <p
            className={`${style.flexjustifycentered} ml-10 text_type_main-default`}
          >
            {" "}
            Добавьте ингридиент
          </p>
        ) : (
          ingredientsWithoutBuns.map((ingredient, index) => (
            <BurgerConstructorElement
              type={undefined}
              isLocked={false}
              text={ingredient.name}
              price={ingredient.price}
              thumbnail={ingredient.image_mobile}
              key={ingredient.id}
              idx={index}
              ingredient={ingredient}
              handleClose={() => dispatch(deleteIngredient(ingredient))}
            />
          ))
        )}
      </div>
      <div className="ml-8 pl-6">
        {buns.price === undefined ? (
          <p
            className={`${style.flexjustifycentered} ml-1 text_type_main-default`}
          >
            {" "}
            Добавьте булочку
          </p>
        ) : (
          <ConstructorElement
            type="bottom"
            isLocked={true}
            text={buns.name + " низ"}
            price={buns.price}
            thumbnail={buns.image_mobile}
          />
        )}
      </div>
      <div className={`${style.flex_bottomright}`}>
        <span className={`${style.flexcentered} mt-10`}>
          <span
            className={`${style.flexcentered} pr-10 text text_type_digits-default`}
          >
            {orderSum}
            <CurrencyIcon type="primary" />
          </span>
          <Button
            htmlType="button"
            type="primary"
            size="large"
            onClick={() => submitOrderHandler()}
            disabled={ingredientsWithoutBuns.length === 0}
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

export default BurgerConstructor;
