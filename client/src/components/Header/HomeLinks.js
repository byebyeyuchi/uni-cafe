/*eslint-disable*/
import React, { Fragment, useContext } from "react";
import { Link } from "react-router-dom";

// react components for routing our app without refresh

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";

// core components
import Button from "../../components/CustomButtons/Button.js";
import styles from "../../assets/jss/material-kit-react/components/headerLinksStyle.js";

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
   const classes = useStyles();

   return (
      <List className={classes.list}>
         <ListItem className={classes.listItem}>
            <Link
               to="/landing-page"
               color="transparent"
               className={classes.navLink}
            >
               Home
            </Link>
         </ListItem>

         <ListItem className={classes.listItem}>
            <Button
               href="/"
               color="transparent"
               target="_blank"
               className={classes.navLink}
            >
               About
            </Button>
         </ListItem>
      </List>
   );
}
