import { useParams } from "react-router";
import { GetIngredientById } from "../../utils/helpers";

// #region Import App components

// #endregion
// #region Styles
import style from "./IngredientDetails.module.css";

// #endregion

const IngredientDetails = (): JSX.Element  => {
  const {id} = useParams() ;
  const ingredient = GetIngredientById(id);
  if(ingredient)
    {
      return (
        <div className={`${style.ingredientDetails}`}>
          <div className={`${style.ingredientImage}`}>
            <img
              src={ingredient.image_large}
              alt={ingredient.name}
              className="ingredientImage pl-5 pr-5 pb-4"
            />
          </div>
          <h2 className={`${style.ingredientName} text text_type_main-medium pb-8`}>
            {ingredient.name}
          </h2>
          <div className={`${style.ingredientParams}`}>
            <div className={`${style.ingredientNutrient}`}>
              <p className={"text text_type_main-default text_color_inactive pb-5"}>
                Калории,ккал
              </p>
              <p className={"text text_type_digits-default text_color_inactive"}>
                {ingredient.calories}
              </p>
            </div>
            <div className={`${style.ingredientNutrient}`}>
              <p className={"text text_type_main-default text_color_inactive pb-5"}>
                Белки, г
              </p>
              <p className={"text text_type_digits-default text_color_inactive"}>
                {ingredient.proteins}
              </p>
            </div>
            <div className={`${style.ingredientNutrient}`}>
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
      );
    }
    else
    {
      return (<></>);
    }

};

export default IngredientDetails;
