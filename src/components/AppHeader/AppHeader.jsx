// #region Import Modules
import React from "react";
import {
  BurgerIcon,
  ListIcon,
  Logo,
  ProfileIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
// #endregion

// #region Styles
import style from "./AppHeader.module.css";
// #endregion

class AppHeader extends React.Component {
  render() {
    return (
      <nav className={`${style.AppHeader}`}>
        <span className={`${style.flex}`}>
          <a href="#" className={`${style.btn} ${style.activebtn} p-5 mr-2 `}>
            <BurgerIcon type="primary" />
            <p className="ml-1 text_type_main-default"> Конструктор</p>
          </a>
          <a href="#" className={`${style.btn} ${style.linkbtn} p-5`}>
            <ListIcon type="secondary" />
            <p className="ml-1 text_type_main-default">Лента заказов</p>
          </a>
        </span>
        <span className={`${style.flex}`}>
          <Logo />
        </span>
        <span className={`${style.flex}`}>
          <a href="#" className={`${style.btn} ${style.linkbtn} p-5`}>
            <ProfileIcon type="secondary" />
            <p className="ml-1 text_type_main-default"> Личный кабинет</p>
          </a>
        </span>
      </nav>
    );
  }
}

export default AppHeader;
