import React from 'react';
import { BurgerIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import './AppHeader.css';

class ConstructorButton extends React.Component {
    render() {
        return (
            <span className='btn'>
                <BurgerIcon type="primary" /> 
                <span className='pl-1'> Конструктор</span>
            </span>
        );
    }
}

export default ConstructorButton