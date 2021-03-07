import React, { Fragment, useContext, useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import classNames from "classnames";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Button from "../../components/CustomButtons/Button.js";
import TextField from "@material-ui/core/TextField";
import GridItem from "../../components/Grid/GridItem.js";
import InputAdornment from "@material-ui/core/InputAdornment";

import EditIcon from "@material-ui/icons/Edit";
import FaceIcon from "@material-ui/icons/Face";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import EmailIcon from "@material-ui/icons/Email";
import SchoolIcon from '@material-ui/icons/School';
import Divider from "@material-ui/core/Divider";
import SaveIcon from "@material-ui/icons/Save";

import profilePic from "../../assets/img/user.png";
import styles from "../../assets/jss/material-kit-react/views/profilePage.js";

// context
import UserContext from "../../context/user/userContext";

const useStyles = makeStyles(styles);

const Description = (props) => {
   const classes = useStyles();
 
   const imageClasses = classNames(
      classes.imgRaised,
      classes.imgRoundedCircle,
   );
  
   const userContext = useContext(UserContext);
   const {
      user,
      error,
      setCurrentUser,
      clearCurrentUser,
      currentUser,
      updateUser,
      reloadUser
   } = userContext;

   const [ profile, setProfile] = useState({
      name: props.user.name,
      age: props.user.age,
      job: props.user.job,
      location: props.user.location
   })
   const { name, age, job, location } = profile;

   const editProfile = (e) => {
      setCurrentUser(props.user);
   };
   
   const onChange = (e) => setProfile({ ...profile, [e.target.name]: e.target.value})
   
   const saveChange = (e) => {
      e.preventDefault();
      if(name !== "") user.name = name;
      if(age !== "") user.age = age;
      if(job !== "") user.job = job;
      if(location !== "") user.location = location;
   
      updateUser(currentUser, user);
      clearCurrentUser();
   };

   return (
      <Fragment>
         <GridItem xs={12} sm={12} md={6}>
            <div className={classes.profile}>
               <div>
                  <img src={profilePic} alt="..." className={imageClasses} />
               </div>
               <div className={classes.name}>
                  {!currentUser ? (
                     <h3 className={classes.title}>{name}</h3>
                  ) : (
                     <TextField
                    
                        id="input-name"
                        label="Edit Name"
                        InputProps={{
                           name:"name",
                           onChange:onChange,
                           startAdornment: (
                              <InputAdornment position="start">
                                 <EditIcon />
                              </InputAdornment>
                           ),
                        }}
                     />
                  )}
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
                     {!currentUser ? (
                        <Button color="info" size="sm" onClick={editProfile}>
                           {" "}
                           <EditIcon /> Edit Profile
                        </Button>
                     ) : (
                        <Button color="info" size="sm" onClick={saveChange}>
                           {" "}
                           <SaveIcon /> Save Change
                        </Button>
                     )}
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
                  {!currentUser ? (
                     <ListItemText primary="Age" secondary={age} />
                  ) : (
                     <TextField
                      
                        id="input-age"
                        label="Edit Age"
                        InputProps={{
                           name:"age",
                           onChange:onChange,
                           startAdornment: (
                              <InputAdornment position="start">
                                 <EditIcon />
                              </InputAdornment>
                           ),
                        }}
                     />
                  )}
               </ListItem>
               <ListItem>
                  <ListItemAvatar>
                     <SchoolIcon />
                  </ListItemAvatar>
                  {!currentUser ? (
                     <ListItemText primary="School" secondary={job} />
                  ) : (
                     <TextField
                    
                        id="input-school"
                        label="Edit School"
                        InputProps={{
                           name:"school",
                           onChange:onChange,
                           startAdornment: (
                              <InputAdornment position="start">
                                 <EditIcon />
                              </InputAdornment>
                           ),
                        }}
                     />
                  )}
               </ListItem>
               <Divider variant="inset" component="li" />
               <ListItem>
                  <ListItemAvatar>
                     <LocationOnIcon />
                  </ListItemAvatar>
                  {!currentUser ? (
                     <ListItemText primary="Location" secondary={location} />
                  ) : (
                     <TextField
                     
                        id="input-location"
                        label="Edit Location"
                        InputProps={{
                           name:"location",
                           onChange:onChange,
                           startAdornment: (
                              <InputAdornment position="start">
                                 <EditIcon />
                              </InputAdornment>
                           ),
                        }}
                     />
                  )}
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

export default Description;
