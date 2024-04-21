import { GET_INGREDIENTS_FAILED, GET_INGREDIENTS_REQUEST, GET_INGREDIENTS_SUCCESS } from "../../services/actions/ingredients";

export type TBurgerIngredientsProps = {
    _id: string,
    name: string,
    type: string,
    proteins: number,
    fat: number,
    carbohydrates: number,
    calories: number,
    price: number,
    image: string,
    image_mobile: string,
    image_large: string,
    __v: number
    idx?:number
    id?:number
};

export type TIngredientsRequestAction = {
  type: typeof GET_INGREDIENTS_REQUEST
};

export type TIngredientsSuccessAction = {
  type: typeof GET_INGREDIENTS_SUCCESS;
  payload: TBurgerIngredientsProps[] };

export  type TIngredientsFailedAction = {
  type: typeof GET_INGREDIENTS_FAILED
};

export type TIngredientsAction = TIngredientsFailedAction | TIngredientsRequestAction | TIngredientsSuccessAction;
