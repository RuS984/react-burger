import React, { useRef } from "react";
import {
  ConstructorElement,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useDrag, useDrop } from "react-dnd";

function BurgerConstructorElement({
  type,
  isLocked,
  text,
  price,
  thumbnail,
  handleClose,
}) {
  const ref = useRef(null);

  const [{ isSortDrag }, dragSortRef] = useDrag({
    type: "sortIngredients",
    item: () => {
      console.log("sortIngredients drag");
      // return { item: ingredient };
    },
    collect: (monitor) => ({
      isDrag: monitor.isDragging(),
    }),
  });

  // const [, dropSort] = useDrop({
  //   accept: "sortIngredients",
  //   collect: (monitor) => ({
  //     isHover: monitor.isOver(),
  //   }),
  //   drop(item) {
  //     console.log("sortIngredients drop");
  //     // let ingredient = item.item;
  //     // ingredient.type === "bun"
  //     //   ? dispatch(dragBun(ingredient))
  //     //   : dispatch(dragIngredient(ingredient));
  //   },
  // });

  // const dragDropRef = dragSortRef(dropSort(ref));

  return (
    <div className="pt-4 pb-4" ref={dragSortRef}>
      <span className="flexcentered">
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
