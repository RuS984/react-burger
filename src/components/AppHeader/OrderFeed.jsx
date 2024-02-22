import React from 'react';
import { ListIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import './AppHeader.css';

class OrderFeed extends React.Component {
    render() {
        return (
            <span className='btn'>
                <ListIcon type="secondary" /> 
                <span className="pl-1">Лента заказов</span>
            </span>
        );
    }
}

export default OrderFeed