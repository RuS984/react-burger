import { Navigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { getUser } from "../../services/actions/user";
import { useDispatch, useSelector } from "../../utils/Types/reduxThunkTypes";
import { TProtectedRouteProps } from "../../utils/Types/pageTypes";

export default function ProtectedRoute({ element, needAuth }:TProtectedRouteProps) {
  const dispatch = useDispatch();
  //=
  const user = useSelector((state) => state.user);
  const [isUserLoaded, setIsUserLoaded] = useState(false);
  const location = useLocation();

  const init = async () => {
    await dispatch(getUser());
    setIsUserLoaded(true);
  };

  useEffect(() => {
    init();
  }, []);

  if (!isUserLoaded) {
    return null;
  }

  if (needAuth) {
    return !user.isError && user.user ? (
      element
    ) : (
      <Navigate to="/login" replace state={{ from: location.pathname }} />
    );
  } else {
    return !user.user ? element : <Navigate to="/" replace />;
  }
}
