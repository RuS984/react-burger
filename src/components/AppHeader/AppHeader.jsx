import React from "react";
import {
  Logo,
  BurgerIcon,
  ListIcon,
  ProfileIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";

import "./AppHeader.css";

class AppHeader extends React.Component {
  render() {
    return (
      <nav className="AppHeader">
        <span className="flex">
          <a href="#" className="btn p-5 mr-2 activebtn">
            <BurgerIcon type="primary" />
            <p className="ml-1 text_type_main-default"> Конструктор</p>
          </a>
          <a href="#" className="btn p-5 linkbtn">
            <ListIcon type="secondary" />
            <p className="ml-1 text_type_main-default">Лента заказов</p>
          </a>
        </span>
        <span className="flex">
          <Logo />
        </span>
        <span className="flex">
          <a href="#" className="btn p-5 linkbtn">
            <ProfileIcon type="secondary" />
            <p className="ml-1 text_type_main-default"> Личный кабинет</p>
          </a>
        </span>
      </nav>
    );
  }
}

export default AppHeader;
