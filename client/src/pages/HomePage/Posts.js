import React, {useContext, useEffect} from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import SectionCarousel from "../Components/Carousel";
import GridContainer from "../../components/Grid/GridContainer.js";
import styles from "../../assets/jss/material-kit-react/views/componentsSections/tabsStyle.js";
import PostItem from "./PostItem";
import PostMake from "./PostMake";

// context
import PostContext from "../../context/post/postContext";
import AuthContext from "../../context/post/postContext";

const useStyles = makeStyles(styles);

const Posts = (props) => {
   const classes = useStyles();
   const postContext = useContext(PostContext);
   const authContext = useContext(AuthContext);
   const { loading, posts, getPost } = postContext;
   const { user } = authContext;
   
   useEffect(() => {
      getPost();
      // eslint-disable-next-line
   }, [user, authContext]);
   
   return (
      <div className={classes.section}>
         <div className={classes.container}>
            <div id="nav-tabs">
            <div>
               <SectionCarousel />
            </div>
               <h2>Post Section</h2>
               <GridContainer>
                  {posts.map((post) => (
                     <PostItem key={post.id} post={post} user={user} profile={post.profile} color="info" />
                  ))}
               </GridContainer>
            </div>


            <div>
               <PostMake />
            </div>
         </div>
      </div>
   );
}

export default Posts;
