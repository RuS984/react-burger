import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  EmailInput,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { forgotPassword } from "../../services/actions/user";

import styles from "./ForgotPassword.module.css";

export default function ForgotPassword() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const [email, setEmail] = useState("");

  const handleEmailChange = (el) => setEmail(el.target.value);

  const handleSubmit = (el) => {
    el.preventDefault();

    if (email.length === 0) {
      alert("Введите email");
      return;
    }
    
    //@ts-ignore
    dispatch(forgotPassword(email));

    navigate("/resetpassword", { state: { previousLocationPathname: location.pathname }});
  };

  return (
    <main className={styles.main}>
      <h2 className={styles.header}>Восстановление пароля</h2>
      <form className={styles.inputs} onSubmit={handleSubmit}>
        <EmailInput
          value={email}
          name="email"
          placeholder="Введите email"
          extraClass="mt-6 mb-6"
          onChange={handleEmailChange}
        />
        <Button htmlType="submit" type="primary" extraClass="mb-6">
          Восстановить
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
