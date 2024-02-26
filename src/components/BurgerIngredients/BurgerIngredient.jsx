import React from "react";
import {
  CurrencyIcon,
  Counter,
} from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";

import propTypesburgerIngredients from "./BurgerIngredientsPropType";
import "./BurgerIngredients.css";

const BurgerIngredient = ({ ingredient, ingredientQty = 0, handleClick }) => (
  <div className="ingredientCard mr-6 mb-8" onClick={handleClick}>
    {ingredientQty > 0 && <Counter size="small" count={ingredientQty} />}
    <img src={ingredient.image} alt={ingredient.name} />
    <span className="price m-1 text text_type_digits-default">
      <span className="pr-3 ">{ingredient.price}</span>
      <CurrencyIcon type="primary" />
    </span>
    <span className="textcenterd">{ingredient.name}</span>
  </div>
);

export default BurgerIngredient;

BurgerIngredient.propTypes = {
  ingredient: propTypesburgerIngredients.isRequired,
  ingredientQty: PropTypes.number,
};
