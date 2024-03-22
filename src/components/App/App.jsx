// #region Import Modules
import React, { useEffect } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
// #endregion

// #region Import App components
import AppHeader from "../AppHeader/AppHeader";
import IngredientDetails from "../IngredientDetails/IngredientDetails";
import Modal from "../Modal/Modal";

// #endregion

// #region Import Redux elements
import { useDispatch, useSelector } from "react-redux";
import { getIngredients } from "../../services/actions/ingredients";

// #endregion

// #region Pages
import Home from "../../pages/Home/Home";
import NotFound from "../../pages/NotFound/NotFound";
import Registration from "../../pages/Registration/Registration";
import Login from "../../pages/Login/Login";
import ForgotPassword from "../../pages/ForgotPassword/ForgotPassword";
import ResetPassword from "../../pages/ResetPassword/ResetPassword";
import Profile from "../../pages/Profile/Profile";
import Ingredient from "../../pages/Ingredient/Ingredient";
import ProtectedRoute from "../../pages/ProtectedRoute/ProtectedRoute";

// #endregion

// #region Styles
import style from "./App.module.css";
import stylesHome from "../../pages/Home/Home.module.css";
// #endregion

function App() {
  // #region Redux logic
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();

  let state = location.state;

  useEffect(() => {
    dispatch(getIngredients());
  }, []);
  // #endregion

  return (
    <div className={`App ${stylesHome.MainContainer}`}>
      <AppHeader />

      <Routes>
        <Route
          path="/registration"
          element={
            <ProtectedRoute element={<Registration />} needAuth={false} />
          }
        />
        <Route
          path="/login"
          element={<ProtectedRoute element={<Login />} needAuth={false} />}
        />
        <Route
          path="/forgotpassword"
          element={
            <ProtectedRoute element={<ForgotPassword />} needAuth={false} />
          }
        />
        <Route
          path="/resetpassword"
          element={
            <ProtectedRoute element={<ResetPassword />} needAuth={false} />
          }
        />

        <Route
          path="/"
          element={<ProtectedRoute element={<Home />} needAuth={true} />}
        />

        {/* <Route path="/ingredients/:id" element={<Ingredient />}>
          <Route path="" element={<BurgerIngredients />} />
        </Route> */}

        <Route
          path="/profile"
          element={<ProtectedRoute element={<Profile />} needAuth={true} />}
        />

        <Route path="*" element={<NotFound />} />

        {state?.backgroundLocation && (
          <Routes>
            <Route
              path="/ingredients/:id"
              element={
                <Modal
                  title={"Детали ингредиента"}
                  handleClickClose={() => {
                    navigate(`/`);
                  }}
                >
                  <IngredientDetails ingredient={1} />
                </Modal>
              }
            />
          </Routes>
        )}
      </Routes>
    </div>
  );
}

export default App;
