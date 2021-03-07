import React, { useReducer } from "react";
import { v4 } from "uuid";
import AlertContext from "./alertContext";
import alertReducer from "./alertReducer";
import { SET_ALERT, REMOVE_ALERT} from "../type";

const AlertState = (props) => {
   const initialState = {
      alerts: [],
      success: [],
   };
   const [state, dispatch] = useReducer(alertReducer, initialState);

   // set alert
   const setAlert = (msg, type) => {
      const id = v4();
      dispatch({
         type: SET_ALERT,
         payload: { msg, type, id },
      });
      setTimeout(() => dispatch({ type: REMOVE_ALERT, payload: id }), 5000);
   };


   return (
      <AlertContext.Provider
         value={{
            alerts: state.alerts,
            setAlert,
         }}
      >
         {props.children}
      </AlertContext.Provider>
   );
};
export default AlertState;