import React from 'react';
import BurgerConstructorElement from './BurgerConstructorElement'
import { Button, CurrencyIcon} from '@ya.praktikum/react-developer-burger-ui-components'

import './BurgerConstructor.css';

import PropTypes from 'prop-types';

import propTypesburgerIngredients from '../BurgerIngredients/BurgerIngredientsPropType';

function BurgerConstructor({ selectedIngredients }) {
    const orderSum = selectedIngredients !== undefined ? selectedIngredients.reduce(function(sum, current) {
        return sum + current.price;}, 0) : 0;

        return (
            <div style={{"display": "flex", "flex-direction": "column"}}>
            <div className="pt-25 "/>
                <div className=" modifedscroll contentwrap">
            
                    {selectedIngredients !== undefined ? selectedIngredients.map((selectedIngredient, index) => 
                        <BurgerConstructorElement
                            type={ index === 0 ? "top" : index === selectedIngredients.length - 1 ? "bottom" : undefined}
                            isLocked={index === 1}
                            text={selectedIngredient.name}
                            price={selectedIngredient.price}
                            thumbnail={selectedIngredient.image_mobile}
                        />)
                        : null}
                    <div className="pt-10"/>

                    
                    
                </div>
                <div style={{"display": "flex", "align-items": "flex-end", "justify-content":"flex-end"}} >
                        <span style={{"display": "flex", "align-items": "center"}}>
                            <span style={{"display": "flex", "align-items": "center"}} className="pr-10">
                                {orderSum}
                                <CurrencyIcon type="primary" />  
                            </span>
                            <Button htmlType="button" type="primary" size="large"> 
                                Оформить заказ
                            </Button>
                    
                            
                        </span>
                    </div>
                    </div>   
        );
    }


BurgerConstructor.propTypes = {
    selectedIngredients: PropTypes.arrayOf(propTypesburgerIngredients).isRequired
  };

export default BurgerConstructor
