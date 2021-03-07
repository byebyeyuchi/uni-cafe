import React, { useReducer, useContext } from "react";
import axios from "axios";
import AuthContext from "./authContext";
import authReducer from "./authReducer";
import {
   REGISTER_SUCCESS,
   REGISTER_FAIL,
   USER_LOADED,
   AUTH_ERROR,
   LOGIN_SUCCESS,
   LOGIN_FAIL,
   LOGOUT,
   CLEAR_ERRORS,
} from "../type";
import setAuthToken from '../../utils/setAuthToken';


const AuthState = (props) => {
   const initialState = {
      token: localStorage.getItem("token"),
      user: null,
      isAuthenticated: null,
      loading: true,
      error: null,
   };
   const [state, dispatch] = useReducer(authReducer, initialState);

   // load user
   const loadUser = async () => {
      if(localStorage.token){
         setAuthToken(localStorage.token);
      }  
      try {
         const res = await axios.get("/api/auth");
         dispatch({ type: USER_LOADED, payload: res.data });
      } catch (err) {
         dispatch({ type: AUTH_ERROR, payload: err.response.data.msg});
      }
   };

   // register user
   const register = async (formData) => {
      const config = {
         headers: {
            "Content-Type": "application/json",
         },
      };
      try {
         const res = await axios.post("/api/users", formData, config);
         dispatch({
            type: REGISTER_SUCCESS,
            payload: res.data, // token returned if success
         });
         loadUser();
      } catch (err) {
         dispatch({
            type: REGISTER_FAIL,
            payload: err.response.data.msg,
         });
      }
   };

   // login user
   const login = async (formData) => {
      const config = {
         headers: {
            "Content-Type": "application/json",
         },
      };
      try {
         const res = await axios.post("/api/auth", formData, config);
         dispatch({
            type: LOGIN_SUCCESS,
            payload: res.data, // token returned if success
         });
         loadUser();
      } catch (err) {
         dispatch({
            type: LOGIN_FAIL,
            payload: err.response.data.msg, 
         });
      }
   };

   // logout user
   const logout = () => {
      localStorage.removeItem('token');
      setAuthToken(null);
      dispatch({type: LOGOUT})
   };
   

   // clear error
   const clearErrors = () => dispatch({ type: CLEAR_ERRORS });

   return (
      <AuthContext.Provider
         value={{
            token: state.token,
            isAuthenticated: state.isAuthenticated,
            loading: state.loading,
            error: state.error,
            user: state.user,
            register,
            loadUser,
            login,
            logout,
            clearErrors,
         }}
      >
         {props.children}
      </AuthContext.Provider>
   );
};
export default AuthState;
