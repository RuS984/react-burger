// #region Import Modules
import React, { useEffect } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { useDispatch, useSelector } from "react-redux";
// #endregion

// #region Import App components
import AppHeader from "../AppHeader/AppHeader";
import BurgerConstructor from "../BurgerConstructor/BurgerConstructor";
import BurgerIngredients from "../BurgerIngredients/BurgerIngredients";
// #endregion

// #region Import Redux elements
import { getIngredients } from "../../services/actions/ingredients";
// #endregion
// #region Styles
import style from "./App.module.css";
// #endregion

function App() {
  // #region Redux logic
  const dispatch = useDispatch();
  const ingredients = useSelector((store) => store.ingredients.data);
  const hasError = useSelector((store) => store.ingredients.hasError);

  useEffect(() => {
    dispatch(getIngredients());
  }, []);
  // #endregion

  return (
    <div className={`App ${style.MainContainer}`}>
      <AppHeader />
      <DndProvider backend={HTML5Backend}>
        <main>
          {!hasError && ingredients.length > 0 && (
            <BurgerIngredients burgerIngredients={ingredients} />
          )}
          <BurgerConstructor />
        </main>
      </DndProvider>
    </div>
  );
}

export default App;
