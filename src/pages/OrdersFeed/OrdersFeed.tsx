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

import styles from "./OrdersFeed.module.css";
import { OrderFeed } from "../../components/OrderFeed/OrderFeed";


export default function OrdersFeed() {

  return (
    <div className={`${styles.main} mt-30`}>
      <OrderFeed/>
    </div>
  );
}
