import { v4 as uuidv4 } from "uuid";
import {
    DELETE_INGREDIENT_FROM_CONSTRUCTOR,
    DRAG_BUN_IN_CONSTRUCTOR,
    DRAG_INGREDIENT_IN_CONSTRUCTOR,
    SORT_INGREDIENT_IN_CONSTRUCTOR,
  } from "../actions/burgerConstructor";
import { constructorIngredientsReducer, initialState } from "./burgerConstructor";

describe('constructorIngredientsReducer test', () => {
    it('should get initial state', () => {
    expect(constructorIngredientsReducer(undefined, {})).toEqual(
            {...initialState})
    })

    it('should DRAG_BUN_IN_CONSTRUCTOR', () => {
        const guidId = uuidv4();
        const testData = {
            "_id": "643d69a5c3f7b9001cfa093c",
            "name": "Краторная булка N-200i",
            "type": "bun",
            "proteins": 80,
            "fat": 24,
            "carbohydrates": 53,
            "calories": 420,
            "price": 1255,
            "image": "https://code.s3.yandex.net/react/code/bun-02.png",
            "image_mobile": "https://code.s3.yandex.net/react/code/bun-02-mobile.png",
            "image_large": "https://code.s3.yandex.net/react/code/bun-02-large.png",
            "__v": 0
        };

        let testBuns = { ...testData, id: guidId };
        
        expect(
            constructorIngredientsReducer(undefined, {
            type: DRAG_BUN_IN_CONSTRUCTOR,
            payload: { ingredient:testData, itemId: guidId },
            })
        ).toEqual({...initialState, 
            buns: testBuns,
            isLoading: false,
        })
    })

    it('should DRAG_INGREDIENT_IN_CONSTRUCTOR', () => {
        const guidId = uuidv4();
        const testData = {
            "_id": "643d69a5c3f7b9001cfa0946",
            "name": "Хрустящие минеральные кольца",
            "type": "main",
            "proteins": 808,
            "fat": 689,
            "carbohydrates": 609,
            "calories": 986,
            "price": 300,
            "image": "https://code.s3.yandex.net/react/code/mineral_rings.png",
            "image_mobile": "https://code.s3.yandex.net/react/code/mineral_rings-mobile.png",
            "image_large": "https://code.s3.yandex.net/react/code/mineral_rings-large.png",
            "__v": 0
        };

        let testIngredient = { ...testData, id: guidId };
        
        expect(
            constructorIngredientsReducer(undefined, {
            type: DRAG_INGREDIENT_IN_CONSTRUCTOR,
            payload: { ingredient:testData, itemId: guidId },
            })
        ).toEqual({...initialState, 
            ingredientsWithoutBuns: [testIngredient],
            isLoading: false,
        })
    })

    it('should DELETE_INGREDIENT_FROM_CONSTRUCTOR', () => {
        const guidIdForDelete = uuidv4();
        const testDataForDelete = {
            "_id": "643d69a5c3f7b9001cfa0946",
            "id" : guidIdForDelete,
            "name": "Хрустящие минеральные кольца",
            "type": "main",
            "proteins": 808,
            "fat": 689,
            "carbohydrates": 609,
            "calories": 986,
            "price": 300,
            "image": "https://code.s3.yandex.net/react/code/mineral_rings.png",
            "image_mobile": "https://code.s3.yandex.net/react/code/mineral_rings-mobile.png",
            "image_large": "https://code.s3.yandex.net/react/code/mineral_rings-large.png",
            "__v": 0
        };

        const guidId1 = uuidv4();
        const testData1 =       {
            "_id": "643d69a5c3f7b9001cfa093c",
            "id" : guidId1,
            "name": "Краторная булка N-200i",
            "type": "bun",
            "proteins": 80,
            "fat": 24,
            "carbohydrates": 53,
            "calories": 420,
            "price": 1255,
            "image": "https://code.s3.yandex.net/react/code/bun-02.png",
            "image_mobile": "https://code.s3.yandex.net/react/code/bun-02-mobile.png",
            "image_large": "https://code.s3.yandex.net/react/code/bun-02-large.png",
            "__v": 0
        };

        const guidId2 = uuidv4();
        const testData2 = {
            "_id": "643d69a5c3f7b9001cfa0947",
            "id" : guidId2,
            "name": "Плоды Фалленианского дерева",
            "type": "main",
            "proteins": 20,
            "fat": 5,
            "carbohydrates": 55,
            "calories": 77,
            "price": 874,
            "image": "https://code.s3.yandex.net/react/code/sp_1.png",
            "image_mobile": "https://code.s3.yandex.net/react/code/sp_1-mobile.png",
            "image_large": "https://code.s3.yandex.net/react/code/sp_1-large.png",
            "__v": 0
        };

        const stateBeforeDelete = {
            ingredientsWithoutBuns: [testData1, testDataForDelete, testData2],
            buns: null,
        };

        const stateAfterDelete = {
            ingredientsWithoutBuns: [testData1, testData2],
            buns: null,
        };

        expect(
            constructorIngredientsReducer(stateBeforeDelete, {
            type: DELETE_INGREDIENT_FROM_CONSTRUCTOR,
            payload: testDataForDelete,
            })
        ).toEqual({...stateAfterDelete})
    })



})
