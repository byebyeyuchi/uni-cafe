import React, { Fragment, useContext } from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import AuthContext from "../../context/auth/authContext";
import Button from "../../components/CustomButtons/Button.js";
import styles from "../../assets/jss/material-kit-react/components/headerLinksStyle.js";


const useStyles = makeStyles(styles);
const ProfileLinks = () => {
   const classes = useStyles();
   const authContext = useContext(AuthContext);
   const { isAuthenticated, logout, user } = authContext;

   const onLogout = () => {
      logout();
   };

   return (
      <Fragment>
         <ListItem className={classes.title}>
            <h3>Welcome, {user && user.name}</h3>
         </ListItem>
         {"  "}
         <ListItem className={classes.listItem}>
            <Link
               to="/landing-page"
               color="transparent"
               className={classes.navLink}
            >
               Back
            </Link>
         </ListItem>

         <ListItem className={classes.listItem}>
            <Button
               color="transparent"
               target="_blank"
               className={classes.navLink}
               onClick={onLogout}
            >
               Logout
            </Button>
         </ListItem>
      </Fragment>
   );
};

export default ProfileLinks;
