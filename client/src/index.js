import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";
import PrivateRoute from "./pages/routing/PrivateRoute";
//import ProfileRoute from "./pages/routing/ProfileRoute";
import "./assets/scss/material-kit-react.scss?v=1.9.0";

// pages for this product
import Alert from "./pages/Components/Alert";
import Home from "./pages/HomePage/Home";
import LandingPage from "./pages/LandingPage/LandingPage.js";
import ProfilePage from "./pages/ProfilePage/ProfilePage.js";
import LoginPage from "./pages/LoginPage/LoginPage.js";
import RegisterPage from "./pages/RegisterPage/RegisterPage";

import PostState from "./context/post/PostState";
import AuthState from "./context/auth/AuthState";
import UserState from "./context/user/UserState";
import AlertState from "./context/alert/AlertState";
import setAuthToken from "./utils/setAuthToken";

var hist = createBrowserHistory();
if (localStorage.token) {
   setAuthToken(localStorage.token);
}

ReactDOM.render(
   <AuthState>
      <UserState>
         <PostState>
            <AlertState>
               <Router history={hist}>
                  <Alert />
                  <Switch>
                     <Route exact path="/" component={LandingPage} />
                     <Route eact path="/login-page" component={LoginPage} />
                     <Route
                        eact
                        path="/register-page"
                        component={RegisterPage}
                     />
                     <PrivateRoute eact path="/landing-page" component={Home} />
                     <PrivateRoute
                        exact
                        path="/profile-page"
                        component={ProfilePage}
                     />
                  </Switch>
               </Router>
            </AlertState>
         </PostState>
      </UserState>
   </AuthState>,
   document.getElementById("root")
);
