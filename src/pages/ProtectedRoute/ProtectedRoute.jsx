import { Navigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { getUser } from "../../services/actions/user";
import { useDispatch, useSelector } from "react-redux";

export default function ProtectedRoute({ element, needAuth }) {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
  const [isUserLoaded, setIsUserLoaded] = useState(false);
  const location = useLocation();

  const init = async () => {
    await getUser();
    setIsUserLoaded(true);
  };

  useEffect(() => {
    init();
  }, []);

  if (!isUserLoaded) {
    return null;
  }

  if (needAuth) {
    return user ? (
      element
    ) : (
      <Navigate to="/login" replace state={{ from: location.pathname }} />
    );
  } else {
    return !user ? element : <Navigate to="/" replace />;
  }
  // return user ? element : <Navigate to="/login" replace/>;
}
