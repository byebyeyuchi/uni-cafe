import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import PostAddIcon from "@material-ui/icons/PostAdd";
import VerifiedUser from "@material-ui/icons/VerifiedUser";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
// core components
import GridContainer from "../../../components/Grid/GridContainer.js";
import GridItem from "../../../components/Grid/GridItem.js";
import InfoArea from "../../../components/InfoArea/InfoArea.js";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";

import styles from "../../../assets/jss/material-kit-react/views/landingPageSections/productStyle.js";

const useStyles = makeStyles(styles);

export default function ProductSection() {
   const classes = useStyles();
   return (
      <div className={classes.section}>
         <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={8}>
               <h2 className={classes.title}>How To Get Involved</h2>
               <h5 className={classes.description}>
                  <List>
                  <ListItem>1. It's a private field for everyone to post,
                     hence you have to register to be able to see other people's posts.
                  </ListItem>
                     <ListItem>2. If you have any ideas of initiating an social event,
                        just send in your plan down below to us. We will process your request as soon as possible.
                        The info of the approved events are gonna be posted to the website </ListItem>
                     <ListItem>
                        3. Most importantly, showing respect is the key:)
                     </ListItem>
                     
                  </List>
               </h5>
            </GridItem>
         </GridContainer>

      </div>
   );
}
