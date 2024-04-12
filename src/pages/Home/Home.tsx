// #region Import Modules
import React, { useEffect } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

// #endregion

// #region Import App components
import AppHeader from "../../components/AppHeader/AppHeader";
import BurgerConstructor from "../../components/BurgerConstructor/BurgerConstructor";
import BurgerIngredients from "../../components/BurgerIngredients/BurgerIngredients";
// #endregion

// #region Import Redux elements
import { useDispatch, useSelector } from "react-redux";
import { getIngredients } from "../../services/actions/ingredients";
// #endregion

// #region Styles
import style from "./Home.module.css";
// #endregion

function Home() {
  // #region Redux logic
  //@ts-ignore
  const ingredients = useSelector((store) => store.ingredients.data);
  //@ts-ignore
  const hasError = useSelector((store) => store.ingredients.hasError);

  // #endregion

  return (
    <>
      <DndProvider backend={HTML5Backend}>
        <main>
          {!hasError && ingredients.length > 0 && <BurgerIngredients />}
          <BurgerConstructor />
        </main>
      </DndProvider>
    </>
  );
}

export default Home;
