import React, {useContext, useEffect} from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components

import GridContainer from "../../components/Grid/GridContainer.js";
import styles from "../../assets/jss/material-kit-react/views/componentsSections/tabsStyle.js";
import UserPostItem from "./UserPostItem";
import UserPostMake from "./UserPostMake";

// context
import PostContext from "../../context/post/postContext";

const useStyles = makeStyles(styles);

export default function UserPosts(props) {
   const classes = useStyles();
   const postContext = useContext(PostContext);
   const { loading, posts, getPost } = postContext;
   
   useEffect(() => {
      getPost();
     
      // eslint-disable-next-line
   }, []);

   return (
      <div className={classes.section}>
         <div className={classes.container}>
            <div id="nav-tabs">
               <h2 className={classes.title}>My Posts</h2>
               <GridContainer justify="center">
                  {posts.filter(post => post.user === props.user._id).map((post) => (
                     <UserPostItem key={post.id} post={post} color="info" />
                  ))}
               </GridContainer>
            </div>
           
            <div>
               <UserPostMake />
            </div>
         </div>
      </div>
   );
}
