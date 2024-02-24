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
        <content className="flex">
          <span className="btn p-5 mr-2">
            <BurgerIcon type="primary" />
            <span className="ml-1 text_type_main-default"> Конструктор</span>
          </span>
          <span className="btn p-5">
            <ListIcon type="secondary" />
            <span className="ml-1 text_type_main-default">Лента заказов</span>
          </span>
        </content>
        <span className="flex">
          <Logo />
        </span>
        <span className="flex">
          <span className="btn p-5">
            <ProfileIcon type="secondary" />
            <span className="ml-1 text_type_main-default"> Личный кабинет</span>
          </span>
        </span>
      </nav>
    );
  }
}

export default AppHeader;
