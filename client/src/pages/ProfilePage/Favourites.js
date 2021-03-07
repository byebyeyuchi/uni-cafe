import React, { Fragment } from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import MenuBookIcon from "@material-ui/icons/MenuBook";
import Favorite from "@material-ui/icons/Favorite";
// core components
import GridContainer from "../../components/Grid/GridContainer.js";
import GridItem from "../../components/Grid/GridItem.js";
import NavPills from "../../components/NavPills/NavPills.js";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import LocationSearchModal  from "../LandingPage/GoogleMap"


import styles from "../../assets/jss/material-kit-react/views/profilePage.js";

const useStyles = makeStyles(styles);

export default function Favourites() {
   const classes = useStyles();

   const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);
   return (
      <Fragment>
         <LocationSearchModal />
      </Fragment>
   );
}
