type TBurgerIngredientsProps = {
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
//type: string[] = ['bun', 'sauce', 'main'],
export default TBurgerIngredientsProps;