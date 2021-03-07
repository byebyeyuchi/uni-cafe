import React, { Fragment, useContext } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
// @material-ui/icons
import DeleteIcon from "@material-ui/icons/Delete";
import UpdateIcon from "@material-ui/icons/Update";

// core components
import GridItem from "../../components/Grid/GridItem.js";
import CustomTabs from "../../components/CustomTabs/CustomTabs.js";
import Button from "../../components/CustomButtons/Button.js";
import Header from "../../components/Header/Header.js";
import GridContainer from "../../components/Grid/GridContainer.js";
import Card from "../../components/Card/Card.js";
import CardBody from "../../components/Card/CardBody.js";
import CardHeader from "../../components/Card/CardHeader.js";
import InfoArea from "../../components/InfoArea/InfoArea";

import styles from "../../assets/jss/material-kit-react/views/componentsSections/tabsStyle.js";

// context
import PostContext from "../../context/post/postContext";

const useStyles = makeStyles(styles);
const UserPostItem = ({ post }) => {
   const classes = useStyles();
   const [cardAnimaton, setCardAnimation] = React.useState("cardHidden");
   setTimeout(function () {
      setCardAnimation("");
   }, 700);

   const postContext = useContext(PostContext);
   const { _id, title, body } = post;
   const { deletePost, setCurrent, clearCurrent } = postContext;

   const onDelete = (e) => {
      e.preventDefault();
      deletePost(_id);
      clearCurrent();
   };

   const onUpdate = (e) => {
      e.preventDefault();
      setCurrent(post);
   };

   return (
      <Fragment>
         <GridItem xs={12} sm={12} md={4}>
            <Card className={classes[cardAnimaton]}>
               <CardHeader color="info" className={classes.cardHeader}>
                  <Button color="info" justIcon onClick={onDelete}>
                     <DeleteIcon />
                  </Button>
                  <Button color="info" justIcon onClick={onUpdate}>
                     <UpdateIcon />
                  </Button>
               </CardHeader>
               <CardBody>
                  <div>
                     <InfoArea title={title} description={body} />
                  </div>
               </CardBody>
            </Card>
         </GridItem>
      </Fragment>
   );
};

export default UserPostItem;
