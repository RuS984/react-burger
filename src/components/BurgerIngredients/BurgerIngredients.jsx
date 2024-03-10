﻿// #region Import Modules
import React from "react";

import PropTypes from "prop-types";

import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";

// #endregion
// #region Import App components
import IngredientDetails from "../IngredientDetails/IngredientDetails";
import Modal from "../Modal/Modal";
import BurgerIngredient from "./BurgerIngredient";
// #endregion
// #region Styles
import style from "./BurgerIngredients.module.css";
import propTypesburgerIngredients from "./BurgerIngredientsPropType";

// #endregion

function BurgerIngredients({ burgerIngredients }) {
  const [isOpen, setisOpen] = React.useState(false);
  const [item, setItem] = React.useState({});

  const [current, setCurrent] = React.useState("bunRef");
  const bunRef = React.useRef(null);
  const sauceRef = React.useRef(null);
  const mainRef = React.useRef(null);
  const ref = React.useRef(null);

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

  // #region Handlers
  const handleOpenModal = (ingredient) => {
    setItem(ingredient);
    setisOpen(true);
  };

  const handleCloseModal = () => {
    setisOpen(false);
  };

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

  const setActiveTab1 = (value) => {
    setCurrent(value);
  };

  const setActiveTab = (tab) => {
    setCurrent(tab);

    document.querySelector(`[data-title="${tab}"]`).scrollIntoView({
      behavior: "smooth",
      inline: "start",
    });
  };
  // #endregion

  return (
    <section className={`${style.flexcolumn} mr-10`}>
      <div className={`${style.ingredienttabs}`}>
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
      <div
        className={`${style.contentwrapbi} mt-10 mb-10 ml-4`}
        onScroll={scrollHandle}
      >
        <div className={`${style.ingredientwrap}`}>
          <p
            className={`${style.fullwidth} text text_type_main-medium mb-6`}
            ref={bunRef}
            data-title="bunRef"
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
            className={`${style.fullwidth} text text_type_main-medium mb-6`}
            ref={sauceRef}
            data-title="sauceRef"
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
            className={`${style.fullwidth} text text_type_main-medium mb-6`}
            ref={mainRef}
            data-title="mainRef"
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
