import styles from "./Profile.module.css";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import {
  EmailInput,
  PasswordInput,
  Input,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import React, { useState } from "react";
import { signOutUser, updateUser } from "../../services/actions/user";

export default function Profile() {
  //@ts-ignore
  const user = useSelector((store) => store.user.user);
  const [login, setLogin] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [password, setPassword] = useState("");

  const handleSetLogin = (el) => setLogin(el.target.value);
  const handleSetEmail = (el) => setEmail(el.target.value);
  const handleSetPassword = (el) => setPassword(el.target.value);

  const dispatch = useDispatch();
  const isCredChanged =
    login.trim() !== user.name ||
    email.trim() !== user.email ||
    password.trim() !== "";

  const resetChanges = () => {
    setLogin(user.name);
    setEmail(user.email);
    setPassword("");
  };

  const updateUserSubmit = (e) => {
    e.preventDefault();
    //@ts-ignore
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
          //@ts-ignore
          onClick={() => dispatch(signOutUser())}
          className={`${styles.linktext}`}
        >
          <p>Выход</p>
        </NavLink>
        <p className={`${styles.text}`}>В этом разделе вы можете</p>
        <p className={`${styles.text}`}>изменить свои персональные данные</p>
      </nav>
      <form className={styles.input} onSubmit={updateUserSubmit}>
        <div className={`${styles.item} mb-6`}>
          <Input
            value={login}
            name="name"
            type={"text"}
            placeholder={"Имя"}
            icon={"EditIcon"}
            onChange={handleSetLogin}
          />
        </div>
        <div className={`${styles.item} mb-6`}>
          <EmailInput
            value={email}
            name="email"
            placeholder={"Логин"}
            onChange={handleSetEmail}
          />
        </div>
        <div className={`${styles.item} `}>
          <PasswordInput
            value={password}
            name="password"
            onChange={handleSetPassword}
          />
        </div>
        <div className={styles.button}>
          {!isCredChanged ? null : (
            <>
              <Button
                type="primary"
                htmlType="submit"
                extraClass="mt-10"
              >
                Сохранить
              </Button>
              <Button
                type="primary"
                htmlType="reset"
                onClick={() => resetChanges()}
              >
                Отменить
              </Button>
            </>
          )}
        </div>
      </form>
    </div>
  );
}
