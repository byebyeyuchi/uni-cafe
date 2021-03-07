import React, { Fragment } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Chat from "@material-ui/icons/Chat";
import PersonIcon from "@material-ui/icons/Person";
import FaceIcon from '@material-ui/icons/Face';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import EmailIcon from '@material-ui/icons/Email';
import SchoolIcon from '@material-ui/icons/School';
import PermContactCalendarIcon from '@material-ui/icons/PermContactCalendar';
// core components
import GridItem from "../../components/Grid/GridItem.js";
import CustomTabs from "../../components/CustomTabs/CustomTabs.js";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Divider from "@material-ui/core/Divider";

import styles from "../../assets/jss/material-kit-react/views/componentsSections/tabsStyle.js";

const useStyles = makeStyles(styles);

const PostItem = ({ post, profile }) => {
   const classes = useStyles();

   const headerColor = "info";
   const { _id, title, body } = post;
 
   return (
      <Fragment>
         <GridItem xs={12} sm={12} md={6}>
            <CustomTabs
               headerColor={headerColor}
               tabs={[
                  {
                     tabName: "Blog",
                     tabIcon: Chat,
                     tabContent: (
                        <Fragment>
                           <h3 color="primary">{title}</h3>
                           <p className={classes.textCenter}>{body}</p>
                        </Fragment>
                     ),
                  },
                  {
                     tabName: "Blogger Info",
                     tabIcon: PersonIcon,
                     tabContent: (
                        <List className={classes.root}>
                           <ListItem>
                              <ListItemAvatar>
                                 <PermContactCalendarIcon />
                              </ListItemAvatar>
                              <ListItemText
                                 primary={profile.email}
                              />
                           </ListItem>
                           <Divider variant="inset" component="li" />
                           <ListItem>
                              <ListItemAvatar>
                                 <FaceIcon />
                              </ListItemAvatar>
                              <ListItemText
                                 primary={profile.age}
                              />
                           </ListItem>
                           <Divider variant="inset" component="li" />
                           <ListItem>
                              <ListItemAvatar>
                                 <SchoolIcon />
                              </ListItemAvatar>
                              <ListItemText
                                 primary={profile.job}
                              />
                           </ListItem>
                           <Divider variant="inset" component="li" />
                           <ListItem>
                              <ListItemAvatar>
                                 <LocationOnIcon />
                              </ListItemAvatar>
                              <ListItemText
                                 primary={profile.location}
                              />
                           </ListItem>
                        </List>
                     ),
                  },
               ]}
            />
         </GridItem>
      </Fragment>
   );
};

export default PostItem;
