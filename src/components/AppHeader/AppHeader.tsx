// #region Import Modules
import React from "react";
import {
  BurgerIcon,
  ListIcon,
  Logo,
  ProfileIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { NavLink } from "react-router-dom";
// #endregion

// #region Styles
import style from "./AppHeader.module.css";
// #endregion

class AppHeader extends React.Component {
  render() {
    return (
      <header className={`${style.AppHeader}`}>
        <span className={`${style.flex}`}>
          <NavLink
            to="/"
            className={`${style.btn} ${style.activebtn} p-5 mr-2 `}
          >
            <BurgerIcon type="primary" />
            <p className="ml-1 text_type_main-default"> Конструктор</p>
          </NavLink>
          <NavLink
            to="/feed"
            className={`${style.btn} ${style.activebtn} p-5 mr-2 `}
          >
            <ListIcon type="secondary" />
            <p className="ml-1 text_type_main-default">Лента заказов</p>
          </NavLink>
        </span>
        <span className={`${style.flex}`}>
          <Logo />
        </span>
        <span className={`${style.flex}`}>
          <NavLink
            to="/profile"
            className={`${style.btn} ${style.linkbtn} p-5`}
          >
            <ProfileIcon type="secondary" />
            <p className="ml-1 text_type_main-default"> Личный кабинет</p>
          </NavLink>
        </span>
      </header>
    );
  }
}

export default AppHeader;
