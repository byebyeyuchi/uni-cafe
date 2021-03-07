import React, { Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import classNames from "classnames";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Button from "components/CustomButtons/Button.js";

import EditIcon from "@material-ui/icons/Edit";
import FaceIcon from "@material-ui/icons/Face";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import EmailIcon from "@material-ui/icons/Email";
import WorkIcon from "@material-ui/icons/Work";
import ImageIcon from "@material-ui/icons/Image";
import Divider from "@material-ui/core/Divider";
import GridItem from "components/Grid/GridItem.js";

import profile from "assets/img/faces/221678.png";
import styles from "assets/jss/material-kit-react/views/profilePage.js";

const useStyles = makeStyles(styles);

export default function EditProfile(props) {
   const classes = useStyles();
   const imageClasses = classNames(
      classes.imgRaised,
      classes.imgRoundedCircle,
      classes.imgFluid
   );

   return (
      <Fragment>
         <GridItem xs={12} sm={12} md={6}>
            <div className={classes.profile}>
               <div>
                  <img src={profile} alt="..." className={imageClasses} />
               </div>

               <div className={classes.name}>
                  <h3 className={classes.title}>{props.user.name}</h3>
                  <h4>
                     <Button justIcon link className={classes.margin5}>
                        <i className={"fab fa-twitter"} />
                     </Button>
                     <Button justIcon link className={classes.margin5}>
                        <i className={"fab fa-instagram"} />
                     </Button>
                     <Button justIcon link className={classes.margin5}>
                        <i className={"fab fa-facebook"} />
                     </Button>
                  </h4>
                 
                  <h4>
                     <Button color="info" size="sm">
                        {" "}
                        <EditIcon /> Edit Profile
                     </Button>
                  </h4>
               </div>
            </div>
         </GridItem>
         <GridItem xs={12} sm={12} md={6}>
            <List className={classes.root}>
               <ListItem>
                  <ListItemAvatar>
                     <FaceIcon />
                  </ListItemAvatar>
                  <ListItemText primary="Age" secondary={props.user.age} />
               </ListItem>
               <ListItem>
                  <ListItemAvatar>
                     <WorkIcon />
                  </ListItemAvatar>
                  <ListItemText primary="Job" secondary={props.user.job} />
               </ListItem>
               <Divider variant="inset" component="li" />
               <ListItem>
                  <ListItemAvatar>
                     <LocationOnIcon />
                  </ListItemAvatar>
                  <ListItemText
                     primary="Location"
                     secondary={props.user.location}
                  />
               </ListItem>
               <Divider variant="inset" component="li" />
               <ListItem>
                  <ListItemAvatar>
                     <EmailIcon />
                  </ListItemAvatar>
                  <ListItemText primary="Email" secondary={props.user.email} />
               </ListItem>
            </List>
         </GridItem>
      </Fragment>
   );
}
