import propTypesburgerIngredients from "../BurgerIngredients/BurgerIngredientsPropType";

import "./IngredientDetails.css";

const IngredientDetails = ({ ingredient }) => {
  return (
    <div className="ingredientDetails">
      <img
        src={ingredient.image_large}
        alt={ingredient.name}
        className="ingredientImage pl-5 pr-5 pb-4"
      />
      <h2 className="ingredientName text text_type_main-medium pb-8">
        {ingredient.name}
      </h2>
      <div className="ingredientParams">
        <div className="ingredientNutrient">
          <p className={"text text_type_main-default text_color_inactive pb-5"}>
            Калории,ккал
          </p>
          <p className={"text text_type_digits-default text_color_inactive"}>
            {ingredient.calories}
          </p>
        </div>
        <div className="ingredientNutrient">
          <p className={"text text_type_main-default text_color_inactive pb-5"}>
            Белки, г
          </p>
          <p className={"text text_type_digits-default text_color_inactive"}>
            {ingredient.proteins}
          </p>
        </div>
        <div className="ingredientNutrient">
          <p className={"text text_type_main-default text_color_inactive pb-5"}>
            Жиры, г
          </p>
          <p className={"text text_type_digits-default text_color_inactive"}>
            {ingredient.fat}
          </p>
        </div>
        <div className="ingredientNutrient">
          <p className={"text text_type_main-default text_color_inactive pb-5"}>
            Углеводы, г
          </p>
          <p className={"text text_type_digits-default text_color_inactive"}>
            {ingredient.carbohydrates}
          </p>
        </div>
      </div>
    </div>
    // </Modal>
  );
};

IngredientDetails.propTypes = {
  ingredient: propTypesburgerIngredients.isRequired,
};

export default IngredientDetails;
