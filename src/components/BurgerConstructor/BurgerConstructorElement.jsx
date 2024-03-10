// #region Import Modules
import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useDrag, useDrop } from "react-dnd";
import {
  ConstructorElement,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { arrayMoveImmutable } from "array-move";
// #endregion

// #region Import Redux elements
import {
  dragSortIngredient,
} from "../../services/actions/burgerConstructor";
// #endregion

// #region Styles
import style from "./BurgerConstructor.module.css";
// #endregion

function BurgerConstructorElement({
  type,
  isLocked,
  text,
  price,
  thumbnail,
  handleClose,
  ingredient,
  idx,
}) {
  // #region Redux logic
  const dispatch = useDispatch();
  const { ingredientsWithoutBuns} = useSelector(
    (store) => store.constructorIngredients,
  );
  // #endregion
  const ref = useRef(null);

  // #region React DnD 
  const [, dragSortRef] = useDrag({
    type: "ingredients",
    item: () => {
      return { item: ingredient, index: ingredient.idx };
    },
    collect: (monitor) => ({
      isDrag: monitor.isDragging(),
    }),
  });
  // #endregion

  // #region React DnD сортировка
  const [, dropIngredient] = useDrop({
    accept: "ingredients",
    collect: (monitor) => ({
      isHover: monitor.isOver(),
      hoveredItem: monitor.getItem(),
    }),
    drop(item, monitor) {
      if (!ref.current) {
        return;
      }

      let ingredient = item.item;
      const dragId = ingredient.id;
      const dragIndex = ingredientsWithoutBuns.findIndex(
        (i) => i.id === dragId,
      );

      if (dragIndex === idx) {
        return;
      }

      const sortedArray = arrayMoveImmutable(
        ingredientsWithoutBuns,
        dragIndex,
        idx,
      );

      dispatch(dragSortIngredient(sortedArray));
    },
  });
  // #endregion

  const dragDropRef = dropIngredient(dragSortRef(ref));

  return (
    <div className="pt-4 pb-4" ref={dragDropRef}>
      <span className={`${style.flexcentered}`}>
        <div className="mr-6">
          <DragIcon type="primary" />
        </div>
        <ConstructorElement
          type={type}
          isLocked={isLocked}
          text={text}
          price={price}
          thumbnail={thumbnail}
          handleClose={handleClose}
        />
      </span>
    </div>
  );
}

export default BurgerConstructorElement;
