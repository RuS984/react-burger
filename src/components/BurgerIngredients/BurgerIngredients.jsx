import React from 'react';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components'
import BurgerIngredient from './BurgerIngredient'

import propTypesburgerIngredients from './BurgerIngredientsPropType';

import './BurgerIngredients.css';

import PropTypes from 'prop-types';

function BurgerIngredients({ burgerIngredients }) {

    const filteredIngredientBun = burgerIngredients !== undefined ? burgerIngredients.filter(item => item.type === 'bun') : []; 
    const filteredIngredientSauce = burgerIngredients !== undefined ? burgerIngredients.filter(item => item.type === 'sauce') : []; 
    const filteredIngredientMain = burgerIngredients !== undefined ? burgerIngredients.filter(item => item.type === 'main') : []; 

        return (
            <section className="mr-10" style={{display: 'flex', flexDirection: 'column'}}>
            <div className="ingredienttabs">
                <Tab value="bun">Булки </Tab>
                <Tab value="sauce">Соусы</Tab>
                <Tab value="main">Начинки</Tab>
            </div>
            <div className="contentwrap mt-10 mb-10 ml-4">
                <div className="ingredientwrap">
                    <p className="text text_type_main-medium mb-6" style={{width: '100%'}}>Булки</p>
                    {filteredIngredientBun.map((data, index) => <BurgerIngredient key={index} ingredient={data}/>)}
                    <p className="text text_type_main-medium mb-6" style={{width: '100%'}}>Соусы</p>
                    {filteredIngredientSauce.map((data, index) => <BurgerIngredient key={index} ingredient={data}/>)}
                    <p className="text text_type_main-medium mb-6" style={{width: '100%'}}>Начинки</p>
                    {filteredIngredientMain.map((data, index) => <BurgerIngredient key={index} ingredient={data}/>)}
                </div>
            </div>
        </section>
        );
    
}

BurgerIngredients.propTypes = {
    burgerIngredients: PropTypes.arrayOf(propTypesburgerIngredients).isRequired
};

export default BurgerIngredients
