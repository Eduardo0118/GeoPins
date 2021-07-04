import React, { useContext, useReducer } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import App from "./pages/App";
import Splash from "./pages/Splash";
import UserContext from "./context/UserContext";
import reducer from "./reducer/reducer";
import PrivateRoute from "./components/PrivateRoute";

import "mapbox-gl/dist/mapbox-gl.css";
import * as serviceWorker from "./serviceWorker";

const Root = () => {
  const initialState = useContext(UserContext);
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <Router>
      <UserContext.Provider value={{ state, dispatch }}>
        <Switch>
          <PrivateRoute exact path="/" component={App} />
          <Route path="/login" component={Splash} />
        </Switch>
      </UserContext.Provider>
    </Router>
  );
};

ReactDOM.render(<Root />, document.getElementById("root"));

serviceWorker.unregister();
