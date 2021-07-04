import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";

import UserContext from "../context/UserContext";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { state } = useContext(UserContext);

  return (
    <Route
      render={(props) =>
        !state.isAuth ? <Redirect to="/login" /> : <Component {...props} />
      }
      {...rest}
    />
  );
};

export default PrivateRoute;
