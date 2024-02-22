import React from 'react';
import { ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import './AppHeader.css';

class MyAccount extends React.Component {
    render() {
        return (
            <span className='btn'>
                <ProfileIcon type="secondary" /> 
                <span className='pl-1'> Личный кабинет</span>
            </span>
        );
    }
}

export default MyAccount