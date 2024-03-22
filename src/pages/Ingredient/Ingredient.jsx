import { Outlet } from "react-router-dom";

import styles from "./ingredient.module.css";

export default function Ingredient() {
  return (
    <main className={styles.main}>
      <Outlet />
    </main>
  );
}
