import React, { useState, useContext, useEffect } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import GridContainer from "../../components/Grid/GridContainer";
import GridItem from "../../components/Grid/GridItem.js";
import CustomInput from "../../components/CustomInput/CustomInput.js";
import Button from "../../components/CustomButtons/Button.js";
import Card from "../../components/Card/Card.js";
import CardBody from "../../components/Card/CardBody.js";
import CardHeader from "../../components/Card/CardHeader.js";

import styles from "../../assets/jss/material-kit-react/views/landingPageSections/workStyle.js";
import Alert from "../Components/Alert";

// context
import PostContext from "../../context/post/postContext";
import AlertContext from "../../context/alert/alertContext";

const useStyles = makeStyles(styles);

const UserPostMake = () => {
   const classes = useStyles();
   const [cardAnimaton, setCardAnimation] = React.useState("cardHidden");
   setTimeout(function () {
      setCardAnimation("");
   }, 700);

   const postContext = useContext(PostContext);
   const { addPost, updatePost, clearCurrent, current } = postContext;
   const alertContext = useContext(AlertContext);
   const { setAlert } = alertContext;

   const [post, setPost] = useState({
      title: "",
      body: "",
   });
   const { title, body } = post;

   useEffect(() => {
      if (current !== null) {
         setPost({
            title: current.title,
            body: current.body,
         });
      } else {
         setPost({
            title: "",
            body: "",
         });
      }
   }, [postContext, current]);

   const onChange = (e) =>
      setPost({ ...post, [e.target.name]: e.target.value });

   const onSubmit = (e) => {
      e.preventDefault();
      if (title === "" || body === "") {
         setAlert("Please fill in title and body", "warning");
      }
      if (current === null) {
         addPost(post);
         setAlert("Post sent", "success");
      } else {
         current.title = post.title;
         current.body = post.body;
         updatePost(current);
         setAlert("Post updated", "info");
      }
      clearUp();
   };

   const clearUp = () => clearCurrent();

   return (
      <div>
         <div className={classes.container}>
            <Alert />
            <GridContainer justify="center">
               <GridItem xs={12} sm={12} md={8}>
                  <Card className={classes[cardAnimaton]}>
                     <CardHeader color="info" className={classes.cardHeader}>
                        <h4>{current ? "Edit Post" : "Say Something"}</h4>
                     </CardHeader>

                     <CardBody>
                        <GridContainer>
                           <GridItem xs={12} sm={12} md={6}>
                              <CustomInput
                                 labelText="post title..."
                                 id="post title"
                                 formControlProps={{
                                    fullWidth: true,
                                 }}
                                 inputProps={{
                                    type: "text",
                                    name: "title",
                                    onChange: onChange,
                                 }}
                              />
                           </GridItem>
                           <CustomInput
                              labelText="post body..."
                              id="message"
                              formControlProps={{
                                 fullWidth: true,
                                 className: classes.textArea,
                              }}
                              inputProps={{
                                 type: "text",
                                 name: "body",
                                 onChange: onChange,
                                 multiline: true,
                                 rows: 5,
                              }}
                           />
                           <GridItem xs={12} sm={12} md={4}>
                              <Button color="info" onClick={onSubmit}>
                                 {current ? "Update" : "Post"}
                              </Button>
                           </GridItem>
                           {current && (
                              <GridItem xs={12} sm={12} md={4}>
                                 <Button color="transparent" onClick={clearUp}>
                                    Cancel
                                 </Button>
                              </GridItem>
                           )}
                        </GridContainer>
                     </CardBody>
                  </Card>
               </GridItem>
            </GridContainer>
         </div>
      </div>
   );
};

export default UserPostMake;
