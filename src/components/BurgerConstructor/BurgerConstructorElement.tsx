// #region Import Modules
import React, { useRef } from "react";
import { useDispatch, useSelector } from "../../utils/Types/reduxThunkTypes";
import { useDrag, useDrop } from "react-dnd";
import {
  ConstructorElement,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { arrayMoveImmutable } from "array-move";
// #endregion

// #region Import Redux elements
import { dragSortIngredient } from "../../services/actions/burgerConstructor";
// #endregion

// #region Styles
import style from "./BurgerConstructor.module.css";
// #endregion

import { TBurgerConstructorElementProps } from "../../utils/Types/burgerConstructorTypes";
import { TBurgerIngredientsProps } from "../../utils/Types/ingredientsTypes";




function BurgerConstructorElement({
  type,
  isLocked,
  text,
  price,
  thumbnail,
  handleClose,
  ingredient,
  idx,
}:TBurgerConstructorElementProps) {
  // #region Redux logic
  const dispatch = useDispatch();
  const { ingredientsWithoutBuns } = useSelector(
    (store) => store.constructorIngredients,
  );
  // #endregion
  const ref = useRef(null);

  // #region React DnD
  const [, dragSortRef] = useDrag({
    type: "ingredients",
    item: () => {
      return { ingredient, index: ingredient.idx };
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
    drop(item:any, monitor) {
      if (!ref.current) {
        return;
      }

      let ingredient = item.ingredient as TBurgerIngredientsProps;
      const dragId = ingredient.id;
      const dragIndex = ingredientsWithoutBuns.findIndex(
        (i:TBurgerIngredientsProps) => i.id === dragId,
      ) as number;

      if (dragIndex === idx) {
        return;
      }

      const sortedArray: TBurgerIngredientsProps[] = arrayMoveImmutable(
        ingredientsWithoutBuns,
        dragIndex,
        idx,
      );

      dispatch(dragSortIngredient(sortedArray));
    },
  });
  // #endregion

  const dragDropRef = dropIngredient(dragSortRef(ref)) as any;

  return (
    <div className="pt-4 pb-4" ref={dragDropRef} data-testid="ingredientDropTarget">
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
