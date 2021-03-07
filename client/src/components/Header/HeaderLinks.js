/*eslint-disable*/
import React, { Fragment, useContext } from "react";
import { Link } from "react-router-dom";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
// react components for routing our app without refresh

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";

// core components
import CustomDropdown from "../../components/CustomDropdown/CustomDropdown.js";
import Button from "../../components/CustomButtons/Button.js";
import styles from "../../assets/jss/material-kit-react/components/headerLinksStyle.js";

// context
import AuthContext from "../../context/auth/authContext";
import PostContext from "../../context/post/postContext";

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
   const classes = useStyles();
   const authContext = useContext(AuthContext);
   const { isAuthenticated, logout, user } = authContext;

   const onLogout = () => {
      logout();
   };

   const authLink = (
      <Fragment>
         <ListItem className={classes.title}>
            <h3>Welcome, {user && user.name}</h3>
         </ListItem>
         {"  "}
         <ListItem className={classes.listItem}>
            <Link
               to="/profile-page"
               color="transparent"
               className={classes.navLink}
            >
               My Profile
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

   const guestLink = (
      <Fragment>
         <ListItem className={classes.listItem}>
            <Button
               href="/register-page"
               color="transparent"
               target="_blank"
               className={classes.navLink}
            >
               Register
            </Button>
         </ListItem>

         <ListItem className={classes.listItem}>
            <Button
               href="login-page"
               color="transparent"
               target="_blank"
               className={classes.navLink}
            >
               Login
            </Button>
         </ListItem>
      </Fragment>
   );

   return (
      <List className={classes.list}>
         {isAuthenticated ? authLink : guestLink}
      </List>
   );
}
