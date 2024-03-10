import {
  DELETE_INGREDIENT_FROM_CONSTRUCTOR,
  DRAG_BUN_IN_CONSTRUCTOR,
  DRAG_INGREDIENT_IN_CONSTRUCTOR,
  SORT_INGREDIENT_IN_CONSTRUCTOR
} from '../actions/burgerConstructor';

const initialState = {        
    ingredientsWithoutBuns: [],
    buns: {},   
  };

  export const constructorIngredientsReducer = (state = initialState, action) => {
    switch (action.type) {
      case DELETE_INGREDIENT_FROM_CONSTRUCTOR:
        return {
          ...state,
          ingredientsWithoutBuns: state.ingredientsWithoutBuns
            .filter((item, index) => state.ingredientsWithoutBuns.indexOf(action.payload) !== index)
        };
      case DRAG_BUN_IN_CONSTRUCTOR:{
        let buns =  {...action.payload.ingredient , id: action.payload.itemId,}
        return { ...state, isLoading: false, buns: buns }
      };
      case DRAG_INGREDIENT_IN_CONSTRUCTOR:{
        let ingredient =  {...action.payload.ingredient, id: action.payload.itemId}
        return { ...state, isLoading: false, ingredientsWithoutBuns: [...state.ingredientsWithoutBuns, ingredient]} 
      };
      case SORT_INGREDIENT_IN_CONSTRUCTOR:
        return { ...state, isLoading: false, ingredientsWithoutBuns: [...action.payload]}; 
 

      default:
        return state;
    }
  };
