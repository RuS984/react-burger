import React, { useState } from "react";
import { useDispatch, useSelector } from "../../utils/Types/reduxThunkTypes";
import { Link, useNavigate, useLocation } from "react-router-dom";
import {
  EmailInput,
  Input,
  Button,
  PasswordInput,
} from "@ya.praktikum/react-developer-burger-ui-components";

import { signInUser } from "../../services/actions/user";

import styles from "./Login.module.css";


export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user.user);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSetEmail = (el: React.ChangeEvent<HTMLInputElement>) => setEmail(el.target.value);
  const handleSetPassword = (el: React.ChangeEvent<HTMLInputElement>) => setPassword(el.target.value);

  const handleSubmitClick = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (email.trim().length === 0 || password.trim().length === 0) {
      alert("Заполните все поля");
      return;
    }

    dispatch(signInUser(email, password));
    if (user) {
      navigate("/", { replace: true });
    }
  };

  const isSubmitDisabled =
    email.trim().length === 0 || password.trim().length === 0;

  return (
    <div className={`${styles.main} mt-30`} data-testid="titleLoginForm">
      <h2 className={styles.header}>Вход</h2>
      <form className={styles.inputs} onSubmit={handleSubmitClick}>
        <EmailInput
          extraClass="mt-6 mb-6"
          value={email}
          name={"email"}
          placeholder="email"
          onChange={handleSetEmail}
        />
        <PasswordInput
          value={password}
          name={"password"}
          placeholder="Пароль"
          onChange={handleSetPassword}
        />
        <Button
          htmlType="submit"
          type="primary"
          extraClass="mt-6 mb-20"
          disabled={isSubmitDisabled}
        >
          Войти
        </Button>
      </form>

      <div className={`${styles.textQuestion} mt-4`}>
        Вы — новый пользователь?
        <Link className={styles.text} to="/registration">
          Зарегистрироваться
        </Link>
      </div>
      <div className={styles.textQuestion}>
        Забыли пароль?
        <Link className={styles.text} to="/forgotpassword">
          Восстановить пароль
        </Link>
      </div>
    </div>
  );
}
