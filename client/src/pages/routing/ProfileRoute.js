import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import AuthContext from "../../context/auth/authContext";

const ProfileRoute = ({ component: Component, ...rest }) => {
    const authContext = useContext(AuthContext);
    const { isAuthenticated } = authContext;
    
    return (
       <Route
          {...rest}
          render={(props) =>
             // if not authenticated, redirect to landing
             !isAuthenticated ? (
                <Redirect to="/landing-page" />
             ) : (
                <Component {...props} />
             )
          }
       />
    );
 };
 
 export default ProfileRoute;
 