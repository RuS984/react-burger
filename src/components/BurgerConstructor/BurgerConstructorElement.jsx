import React from 'react';
import { ConstructorElement,  DragIcon} from '@ya.praktikum/react-developer-burger-ui-components'

class BurgerConstructorElement extends React.Component {
    
    render() {
        return (
            <div style={{"display": "flex"}} className="p-4 ">
                <span style={{"display": "flex", "align-items": "center"}}>
                    <DragIcon type="primary" />
                    <ConstructorElement
                        type={this.props.type}
                        isLocked={this.props.isLocked}
                        text={this.props.text}
                        price={this.props.price}
                        thumbnail={this.props.thumbnail}
                    />
                </span>
            </div>
        );
    }
}

export default BurgerConstructorElement
