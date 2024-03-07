import React from "react";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import Modal from "../Modal/Modal";

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
  const ref = React.useRef(null);

  const scrollHandle = (e) => {
    let scrollTop = e.currentTarget.scrollTop;
    if (
      scrollTop > bunRef.current?.getBoundingClientRect().bottom &&
      scrollTop < sauceRef.current?.getBoundingClientRect().bottom
    ) {
      setCurrent("bunRef");
    }
    if (
      scrollTop > sauceRef.current?.getBoundingClientRect().bottom &&
      scrollTop < mainRef.current?.getBoundingClientRect().bottom
    ) {
      setCurrent("sauceRef");
    }
    if (scrollTop > mainRef.current?.getBoundingClientRect().bottom) {
      setCurrent("mainRef");
    }
  };

  const {
    filteredIngredientBun,
    filteredIngredientSauce,
    filteredIngredientMain,
  } = React.useMemo(() => {
    return {
      filteredIngredientBun: burgerIngredients.filter(
        (item) => item.type === "bun",
      ),
      filteredIngredientSauce: burgerIngredients.filter(
        (item) => item.type === "sauce",
      ),
      filteredIngredientMain: burgerIngredients.filter(
        (item) => item.type === "main",
      ),
    };
  }, [burgerIngredients]);

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
    <section className="mr-10 flexcolumn">
      <div className="ingredienttabs" onScroll={scrollHandle}>
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
      <div className="contentwrapbi mt-10 mb-10 ml-4">
        <div className="ingredientwrap">
          <p className="text text_type_main-medium mb-6 fullwidth">Булки</p>
          {filteredIngredientBun.map((data, index) => (
            <BurgerIngredient
              key={index}
              ingredient={data}
              handleClick={() => handleOpenModal(data)}
            />
          ))}
          <p className="text text_type_main-medium mb-6 fullwidth">Соусы</p>
          {filteredIngredientSauce.map((data, index) => (
            <BurgerIngredient
              key={index}
              ingredient={data}
              handleClick={() => handleOpenModal(data)}
            />
          ))}
          <p className="text text_type_main-medium mb-6 fullwidth">Начинки</p>
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
        <Modal title={"Детали ингредиента"} handleClickClose={handleCloseModal}>
          <IngredientDetails ingredient={item} />
        </Modal>
      )}
    </section>
  );
}

BurgerIngredients.propTypes = {
  burgerIngredients: PropTypes.arrayOf(propTypesburgerIngredients.isRequired)
    .isRequired,
};

export default BurgerIngredients;
