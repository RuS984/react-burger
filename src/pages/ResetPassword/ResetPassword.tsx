import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useLocation, Navigate } from "react-router-dom";
import {
  Input,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { resetPassword } from "../../services/actions/user";

import styles from "./ResetPassword.module.css";

export default function ResetPassword() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  //@ts-ignore
  const user = useSelector((store) => store.user.user);
  const [password, setPassword] = useState("");
  const [token, setToken] = useState("");
  const location = useLocation();

  const handlePasswordChange = (el) => setPassword(el.target.value);
  const handleTokenChange = (el) => setToken(el.target.value);

  const handleSubmit = (el) => {
    el.preventDefault();

    if (password.length === 0) {
      alert("Введите password");
      return;
    }

    //@ts-ignore
    dispatch(resetPassword(password, token));
  };

  useEffect(() => {
    if (location.state === null || location.state.previousLocationPathname !== "/forgotpassword")
    {
      navigate("/", { state: { previousLocationPathname: location.pathname }});
    }
  }, []);
 
  return (
    <main className={`${styles.main} mt-30`}>
      <h2 className={styles.header}>Восстановление пароля</h2>
      <form className={styles.inputs} onSubmit={handleSubmit}>
        <Input
          value={password}
          name={"password"}
          type={"text"}
          placeholder="Введите новый пароль"
          onChange={handlePasswordChange}
        />
        <Input
          value={token}
          name={"token"}
          type={"text"}
          placeholder="Введите код из письма"
          extraClass="mt-6"
          onChange={handleTokenChange}
        />
        <Button htmlType="submit" type="primary" extraClass="mt-6 mb-20">
          Сохранить
        </Button>
      </form>

      <div className={styles.remember}>
        Вспомнили пароль?
        <Link className={styles.text} to="/login">
          Войти
        </Link>
      </div>
    </main>
  );
}
