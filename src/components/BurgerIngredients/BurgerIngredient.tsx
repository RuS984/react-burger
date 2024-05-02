// #region Import Modules
import React from "react";
import PropTypes from "prop-types";
import { useDrag } from "react-dnd";
import { useSelector } from "../../utils/Types/reduxThunkTypes";
import {
  Counter,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";

import { useLocation, useNavigate } from "react-router";
// #endregion

// #region Styles
import style from "./BurgerIngredients.module.css";

// #endregion

// #region Import App components
import { TBurgerIngredientProps } from "../../utils/Types/burgerConstructorTypes";

// #endregion


function BurgerIngredient({ ingredient, handleClick }:TBurgerIngredientProps): JSX.Element {
  // #region Redux logic
  const { ingredientsWithoutBuns, buns } = useSelector(
    (store) => store.constructorIngredients,
  );
  // #endregion

  // #region React DnD
  const [{ isDrag }, dragRef] = useDrag({
    type: "ingredients",
    item: () => {
      return { ingredient };
    },
    collect: (monitor) => ({
      isDrag: monitor.isDragging(),
    }),
  });
  // #endregion

  const { ingredientQty } = React.useMemo(() => {
    return {
      ingredientQty:
        ingredient.type === "bun"
          ? (buns != null && buns._id === ingredient._id) 
            ? 1
            : 0
          : ingredientsWithoutBuns.filter((item) => item._id === ingredient._id)
              .length,
    };
  }, [ingredientsWithoutBuns, buns, ingredient]);

  const navigate = useNavigate();
  const location = useLocation();
  const id = ingredient._id;
  function displayModal() {
      navigate(`/ingredients/${id}`, {state: {previousLocation: location}});
  }

  return (
    <>
    <div
      className={
        isDrag
          ? `${style.ingredientCard} mr-6 mb-8 ${style.dragging}`
          : `${style.ingredientCard} mr-6 mb-8`
      }
      onClick={displayModal}
      ref={dragRef}
    >
      {ingredientQty > 0 && <Counter size="small" count={ingredientQty} />}
      <img src={ingredient.image} alt={ingredient.name} />
      <span className={`${style.price} m-1 text text_type_digits-default`}>
        <span className="pr-3 ">{ingredient.price}</span>
        <CurrencyIcon type="primary" />
      </span>
      <span className={`${style.textcenterd}`}>{ingredient.name}</span>
    </div>
    </>
  );
}

export default BurgerIngredient;
