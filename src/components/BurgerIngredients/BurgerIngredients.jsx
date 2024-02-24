import React from "react";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";

import BurgerIngredient from "./BurgerIngredient";
import IngredientDetails from "../IngredientDetails/IngredientDetails";

import propTypesburgerIngredients from "./BurgerIngredientsPropType";

import "./BurgerIngredients.css";

import PropTypes from "prop-types";

function BurgerIngredients({ burgerIngredients }) {
  const [isOpen, setisOpen] = React.useState(false);
  const [item, setItem] = React.useState({});

  const [current, setCurrent] = React.useState("bunRef");
  const bunRef = React.useRef(null);
  const sauceRef = React.useRef(null);
  const mainRef = React.useRef(null);

  const filteredIngredientBun =
    burgerIngredients !== undefined
      ? burgerIngredients.filter((item) => item.type === "bun")
      : [];
  const filteredIngredientSauce =
    burgerIngredients !== undefined
      ? burgerIngredients.filter((item) => item.type === "sauce")
      : [];
  const filteredIngredientMain =
    burgerIngredients !== undefined
      ? burgerIngredients.filter((item) => item.type === "main")
      : [];

  const handleOpenModal = (ingredient) => {
    setItem(ingredient);
    setisOpen(true);
  };

  const handleCloseModal = () => {
    setisOpen(false);
  };

  const setActiveTab = (value) => {
    setCurrent(value);
  };

  return (
    <section
      className="mr-10"
      style={{ display: "flex", flexDirection: "column" }}
    >
      <div className="ingredienttabs">
        <Tab
          value="bunRef"
          active={current === "bunRef"}
          onClick={setActiveTab}
        >
          Булки{" "}
        </Tab>
        <Tab
          value="sauceRef"
          active={current === "sauceRef"}
          onClick={setActiveTab}
        >
          Соусы
        </Tab>
        <Tab
          value="mainRef"
          active={current === "mainRef"}
          onClick={setActiveTab}
        >
          Начинки
        </Tab>
      </div>
      <div className="contentwrap mt-10 mb-10 ml-4">
        <div className="ingredientwrap">
          <p
            className="text text_type_main-medium mb-6"
            style={{ width: "100%" }}
          >
            Булки
          </p>
          {filteredIngredientBun.map((data, index) => (
            <BurgerIngredient
              key={index}
              ingredient={data}
              handleClick={() => handleOpenModal(data)}
            />
          ))}
          <p
            className="text text_type_main-medium mb-6"
            style={{ width: "100%" }}
          >
            Соусы
          </p>
          {filteredIngredientSauce.map((data, index) => (
            <BurgerIngredient
              key={index}
              ingredient={data}
              handleClick={() => handleOpenModal(data)}
            />
          ))}
          <p
            className="text text_type_main-medium mb-6"
            style={{ width: "100%" }}
          >
            Начинки
          </p>
          {filteredIngredientMain.map((data, index) => (
            <BurgerIngredient
              key={index}
              ingredient={data}
              handleClick={() => handleOpenModal(data)}
            />
          ))}
        </div>
      </div>
      {isOpen && (
        <IngredientDetails
          ingredient={item}
          handleClickClose={handleCloseModal}
        />
      )}
    </section>
  );
}

BurgerIngredients.propTypes = {
  burgerIngredients: PropTypes.arrayOf(propTypesburgerIngredients.isRequired)
    .isRequired,
};

export default BurgerIngredients;
