// #region Import Modules
import React, { useEffect } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
// #endregion

// #region Import App components
import AppHeader from "../AppHeader/AppHeader";
import IngredientDetails from "../IngredientDetails/IngredientDetails";
import Modal from "../Modal/Modal";

// #endregion

// #region Import Redux elements
import { useDispatch } from "react-redux";
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
import stylesHome from "../../pages/Home/Home.module.css";
// #endregion

function App() {
  // #region Redux logic
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();

  const background = location.state?.previousLocation;

  useEffect(() => {
    dispatch(getIngredients());
  }, [dispatch]);
  // #endregion

  return (
    <div className={`App ${stylesHome.MainContainer}`}>
      <AppHeader />

      <Routes  location={background || location}>
        <Route path="/registration" element={<ProtectedRoute element={<Registration />} needAuth={false} />} />
        <Route path="/login" element={<ProtectedRoute element={<Login />} needAuth={false} />} />
        <Route path="/forgotpassword" element={<ProtectedRoute element={<ForgotPassword />} needAuth={false} />}/>
        <Route path="/resetpassword" element={<ProtectedRoute element={<ResetPassword />} needAuth={false} />}/>
        <Route path="/" element={<Home />} />
        <Route path='/ingredients/:id' element={<Ingredient/>}/>
        <Route path="/profile" element={<ProtectedRoute element={<Profile />} needAuth={true} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

        {background && (
          <Routes>
            <Route path='/ingredients/:id' element={<Modal handleClickClose={() => {
               navigate(`/`); 
               }} 
                  title={"Детали ингридиента"}>
                <IngredientDetails/>
            </Modal>}/>
          </Routes>
        )}

    </div>
  );
}

export default App;
