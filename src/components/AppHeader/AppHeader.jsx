import React from 'react';
import { Logo } from '@ya.praktikum/react-developer-burger-ui-components'
import ConstructorButton from './ConstructorButton'
import OrderFeed from './OrderFeed'
import MyAccount from './MyAccount'

import './AppHeader.css';

class AppHeader extends React.Component {
    render() {
        return (
            <nav className='AppHeader' >
                <content className='flex'>
                    <ConstructorButton/>
                    <span className="pr-1"/>
                    <OrderFeed/>
                </content>
                <span className='flex'>
                    <Logo />
                </span>
                <span className='flex'>
                    <MyAccount/>
                </span>
            </nav>
        );
    }
}

export default AppHeader
