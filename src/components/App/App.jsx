import React from "react";
import "./App.css";
import AppHeader from "../AppHeader/AppHeader";
import BurgerIngredients from "../BurgerIngredients/BurgerIngredients";
import BurgerConstructor from "../BurgerConstructor/BurgerConstructor";

import { getIngredients } from "../../services/actions/ingredients";

import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [state, setState] = React.useState({
    selectedIngredients: [
      {
        _id: "643d69a5c3f7b9001cfa093c",
        name: "Краторная булка N-200i",
        type: "bun",
        proteins: 80,
        fat: 24,
        carbohydrates: 53,
        calories: 420,
        price: 1255,
        image: "https://code.s3.yandex.net/react/code/bun-02.png",
        image_mobile: "https://code.s3.yandex.net/react/code/bun-02-mobile.png",
        image_large: "https://code.s3.yandex.net/react/code/bun-02-large.png",
        __v: 0,
      },
      {
        _id: "643d69a5c3f7b9001cfa0944",
        name: "Соус традиционный галактический",
        type: "sauce",
        proteins: 42,
        fat: 24,
        carbohydrates: 42,
        calories: 99,
        price: 15,
        image: "https://code.s3.yandex.net/react/code/sauce-03.png",
        image_mobile:
          "https://code.s3.yandex.net/react/code/sauce-03-mobile.png",
        image_large: "https://code.s3.yandex.net/react/code/sauce-03-large.png",
        __v: 0,
      },
      {
        _id: "643d69a5c3f7b9001cfa093f",
        name: "Мясо бессмертных моллюсков Protostomia",
        type: "main",
        proteins: 433,
        fat: 244,
        carbohydrates: 33,
        calories: 420,
        price: 1337,
        image: "https://code.s3.yandex.net/react/code/meat-02.png",
        image_mobile:
          "https://code.s3.yandex.net/react/code/meat-02-mobile.png",
        image_large: "https://code.s3.yandex.net/react/code/meat-02-large.png",
        __v: 0,
      },
      {
        _id: "643d69a5c3f7b9001cfa0947",
        name: "Плоды Фалленианского дерева",
        type: "main",
        proteins: 20,
        fat: 5,
        carbohydrates: 55,
        calories: 77,
        price: 874,
        image: "https://code.s3.yandex.net/react/code/sp_1.png",
        image_mobile: "https://code.s3.yandex.net/react/code/sp_1-mobile.png",
        image_large: "https://code.s3.yandex.net/react/code/sp_1-large.png",
        __v: 0,
      },
      {
        _id: "643d69a5c3f7b9001cfa0946",
        name: "Хрустящие минеральные кольца",
        type: "main",
        proteins: 808,
        fat: 689,
        carbohydrates: 609,
        calories: 986,
        price: 300,
        image: "https://code.s3.yandex.net/react/code/mineral_rings.png",
        image_mobile:
          "https://code.s3.yandex.net/react/code/mineral_rings-mobile.png",
        image_large:
          "https://code.s3.yandex.net/react/code/mineral_rings-large.png",
        __v: 0,
      },
      {
        _id: "643d69a5c3f7b9001cfa0946",
        name: "Хрустящие минеральные кольца",
        type: "main",
        proteins: 808,
        fat: 689,
        carbohydrates: 609,
        calories: 986,
        price: 300,
        image: "https://code.s3.yandex.net/react/code/mineral_rings.png",
        image_mobile:
          "https://code.s3.yandex.net/react/code/mineral_rings-mobile.png",
        image_large:
          "https://code.s3.yandex.net/react/code/mineral_rings-large.png",
        __v: 0,
      },
      {
        _id: "643d69a5c3f7b9001cfa093c",
        name: "Краторная булка N-200i",
        type: "bun",
        proteins: 80,
        fat: 24,
        carbohydrates: 53,
        calories: 420,
        price: 1255,
        image: "https://code.s3.yandex.net/react/code/bun-02.png",
        image_mobile: "https://code.s3.yandex.net/react/code/bun-02-mobile.png",
        image_large: "https://code.s3.yandex.net/react/code/bun-02-large.png",
        __v: 0,
      },
    ],
  });

  const dispatch = useDispatch();
  const ingredients = useSelector((store) => store.ingredients.data);
  const hasError = useSelector((store) => store.ingredients.hasError);

  useEffect(() => {
    dispatch(getIngredients());
  }, []);

  return (
    <div className="App MainContainer">
      <AppHeader />
      <DndProvider backend={HTML5Backend}>
        <main>
          {!hasError && ingredients.length > 0 && (
            <BurgerIngredients burgerIngredients={ingredients} />
          )}
          <BurgerConstructor selectedIngredients={state.selectedIngredients} />
        </main>
      </DndProvider>
    </div>
  );
}

export default App;
