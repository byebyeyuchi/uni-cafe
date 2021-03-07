import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import AuthContext from "../../context/auth/authContext";

const PrivateRoute = ({ component: Component, ...rest }) => {
   const authContext = useContext(AuthContext);
   const { isAuthenticated, loading, user, token, error } = authContext;
   
   return (
      <Route
         {...rest}
         render={(props) =>
            // if not authenticated, redirect to log in page
            !isAuthenticated ? (
               <Redirect to="/" />
            ) : (
               <Component
                  {...props}
                  isAuthenticated={isAuthenticated}
                  loading={loading}
                  user={user}
                  token={token}
                  error={error}
               />
            )
         }
      />
   );
};

export default PrivateRoute;
