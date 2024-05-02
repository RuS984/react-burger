import styles from "./Profile.module.css";
import { useDispatch, useSelector } from "../../utils/Types/reduxThunkTypes";
import { NavLink } from "react-router-dom";
import {
  EmailInput,
  PasswordInput,
  Input,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import React, { useState } from "react";
import { signOutUser, updateUser } from "../../services/actions/user";
import { OrderFeed } from "../../components/OrderFeed/OrderFeed";
import Feed from "../../components/OrderFeed/Feed/Feed";


export default function ProfileOrders() {
  const user = useSelector((store) => store.user.user);
  const [login, setLogin] = useState(user?.name || "");
  const [email, setEmail] = useState(user?.email || "");
  const [password, setPassword] = useState("");

  const handleSetLogin = (el:React.ChangeEvent<HTMLInputElement>) => setLogin(el.target.value);
  const handleSetEmail = (el:React.ChangeEvent<HTMLInputElement>) => setEmail(el.target.value);
  const handleSetPassword = (el:React.ChangeEvent<HTMLInputElement>) => setPassword(el.target.value);

  const dispatch = useDispatch();
  const isCredChanged =
    login.trim() !== user?.name || 
    email.trim() !== user?.email ||
    password.trim() !== "";

  const resetChanges = () => {
    setLogin(user?.name || "");
    setEmail(user?.email || "");
    setPassword("");
  };

  const updateUserSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(updateUser(login, email, password))
    setPassword("");
  };

  return (
    <div className={`${styles.profilemain} mt-30`}>
      <nav className={`mb-20 mr-15`}>
        <NavLink to="/profile" className={`${styles.linktext}`}>
          <p>Профиль</p>
        </NavLink>
        <NavLink to="/profile/orders" className={`${styles.linktext}`}>
          <p>История заказов</p>
        </NavLink>
        <NavLink
          to="/"
          onClick={() => dispatch(signOutUser())}
          className={`${styles.linktext}`}
        >
          <p>Выход</p>
        </NavLink>
        <p className={`${styles.text}`}>В этом разделе вы можете</p>
        <p className={`${styles.text}`}>изменить свои персональные данные</p>
      </nav>
      <Feed />
    </div>
  );
}
