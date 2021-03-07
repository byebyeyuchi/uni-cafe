
import React, { useReducer } from "react";
import axios from "axios";
import UserContext from "./userContext";
import UserReducer from "./UserReducer";
import {
   SET_CURRENT_USER,
   CLEAR_CURRENT_USER,
   UPDATE_USER,
   USER_ERROR,
   USER_RELOADED
} from "../type";
import setAuthToken from "../../utils/setAuthToken";

const UserState = (props) => {
   const initialState = {
      token: localStorage.getItem("token"),
      currentUser: null,
      user: {},
      isAuthenticated: null,
      error: null,
   };
   const [state, dispatch] = useReducer(UserReducer, initialState);

   // set current user
   const setCurrentUser = (user) => {
      dispatch({
         type: SET_CURRENT_USER,
         payload: user
      });
   };

   // clear current user
   const clearCurrentUser = () => {
      dispatch({ type: CLEAR_CURRENT_USER });
   };

   // update user
   const updateUser = async (currentUser, user) => {
      const config = {
         headers: {
            "Content-Type": "application/json",
         },
      };
      try {
         const res = await axios.put(`/api/users/${currentUser._id}`, user, config);
         dispatch({
            type: UPDATE_USER,
            payload: res.data,
         });
         reloadUser();
      } catch (err) {
         dispatch({
            type: USER_ERROR,
            payload: err.response.msg,
         });
      }
   };

   // reload user
   const reloadUser = async () => {
    if(localStorage.token){
       setAuthToken(localStorage.token);
    }  
    try {
       const res = await axios.get("/api/auth");
       dispatch({ type: USER_RELOADED, payload: res.data });
    } catch (err) {
       dispatch({ type: USER_ERROR, payload: err.response.data.msg});
    }
 };


   return (
      <UserContext.Provider
         value={{
            user: state.user,
            token: state.token,
            currentUser: state.currentUser,
            isAuthenticated: state.isAuthenticated,
            loading: state.loading,
            error: state.error,
            setCurrentUser,
            clearCurrentUser,
            updateUser,
            reloadUser
         }}
      >
         {props.children}
      </UserContext.Provider>
   );
};

export default UserState;
