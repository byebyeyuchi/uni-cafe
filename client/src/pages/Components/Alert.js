import React, { useContext } from "react";
import Alert from "@material-ui/lab/Alert";
import AlertContext from "../../context/alert/alertContext";

const AlertAlert = () => {
   const alertContext = useContext(AlertContext);
   const { alerts } = alertContext;
   return (
      alerts.length > 0 &&
      alerts.map((alert) => (
         <Alert severity={alert.type}>
            <strong>{alert.msg}</strong>
         </Alert>
      ))
   );
};
export default AlertAlert;
