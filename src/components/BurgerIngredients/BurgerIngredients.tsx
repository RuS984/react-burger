// #region Import Modules
import React from "react";
import PropTypes from "prop-types";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
// #endregion

// #region Import App components
import IngredientDetails from "../IngredientDetails/IngredientDetails";
import Modal from "../Modal/Modal";
import BurgerIngredient from "./BurgerIngredient";
// #endregion

// #region Import Redux elements
import { useSelector } from "react-redux";
// #endregion

// #region Styles
import style from "./BurgerIngredients.module.css";

import TBurgerIngredientsProps from "./TBurgerIngredientsProps";
// #endregion

function BurgerIngredients() {
  const [isOpen, setisOpen] = React.useState(false);
  const [item, setItem] = React.useState<TBurgerIngredientsProps | object>({});

  const [current, setCurrent] = React.useState("bunRef");
  
  const bunRef = React.useRef<HTMLDivElement | null>(null);
  const sauceRef = React.useRef<HTMLDivElement | null>(null);
  const mainRef = React.useRef<HTMLDivElement | null>(null);

  //@ts-ignore
  const burgerIngredients: TBurgerIngredientsProps[] = useSelector((store) => store.ingredients.data);

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
  const handleOpenModal = (ingredient: TBurgerIngredientsProps) => {
    setItem(ingredient);
    setisOpen(true);
  };

  const handleCloseModal = () => {
    setisOpen(false);
  };

  const scrollHandle = (e) => {
    let scrollTop = (e.currentTarget as HTMLElement).scrollTop; 
    if (
      //@ts-ignore
      scrollTop > bunRef.current?.getBoundingClientRect().bottom &&
      //@ts-ignore
      scrollTop < sauceRef.current?.getBoundingClientRect().bottom
    ) {
      setCurrent("bunRef");
    }
    if (
      //@ts-ignore
      scrollTop > sauceRef.current?.getBoundingClientRect().bottom &&
      //@ts-ignore
      scrollTop < mainRef.current?.getBoundingClientRect().bottom
    ) {
      setCurrent("sauceRef");
    }
    //@ts-ignore
    if (scrollTop > mainRef.current?.getBoundingClientRect().bottom) {
      setCurrent("mainRef");
    }
  };

  const setActiveTab = (tab:string) => {
    setCurrent(tab);

    //@ts-ignore
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
              key={data._id}
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
              key={data._id}
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
              key={data._id}
              ingredient={data}
              handleClick={() => handleOpenModal(data)}
            />
          ))}
        </div>
      </div>
      {isOpen && (
        <Modal title={"Детали ингредиента"} handleClickClose={handleCloseModal}>
          <IngredientDetails />
        </Modal>
      )}
    </section>
  );
}

export default BurgerIngredients;
