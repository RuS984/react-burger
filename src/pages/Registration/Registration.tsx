import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  EmailInput,
  Input,
  PasswordInput,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";

import { registerUser } from "../../services/actions/user";

import styles from "./Registration.module.css";

export default function Registration() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [login, setLogin] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSetLogin = (el) => setLogin(el.target.value);
  const handleSetEmail = (el) => setEmail(el.target.value);
  const handleSetPassword = (el) => setPassword(el.target.value);

  const handleSubmitClick = async (e) => {
    e.preventDefault();

    if (
      login.trim().length === 0 ||
      email.trim().length === 0 ||
      password.trim().length === 0
    ) {
      alert("Заполните все поля");
      return;
    }

    //@ts-ignore
    dispatch(registerUser(email, password, login)).then((success) => {
      if (success) {
        navigate("/", { replace: true });
      }
    });
  };

  const isSubmitDisabled =
    login.trim().length === 0 ||
    email.trim().length === 0 ||
    password.trim().length === 0;

  return (
    <main className={`${styles.main} mt-30`}>
      <h2 className={`${styles.header}`}>Регистрация</h2>
      <form className={styles.inputs} onSubmit={handleSubmitClick}>
        <Input
          name="login"
          value={login}
          type="text"
          placeholder="Имя"
          extraClass="mt-6 mb-6"
          size="default"
          onChange={handleSetLogin}
        />
        <EmailInput
          name="email"
          value={email}
          placeholder="email"
          extraClass="mb-6"
          onChange={handleSetEmail}
        />
        <PasswordInput
          name="password"
          value={password}
          placeholder="Пароль"
          extraClass="mb-6"
          onChange={handleSetPassword}
        />
        <Button
          htmlType="submit"
          type="primary"
          extraClass="mb-20"
          disabled={isSubmitDisabled}
        >
          Зарегистрироваться
        </Button>
      </form>

      <div className={styles.alreadyReg}>
        Уже зарегистрированы?
        <Link className={styles.text} to="/login">
          Войти
        </Link>
      </div>
    </main>
  );
}
