import React, { useReducer } from "react";
import axios from "axios";
import PostContext from "./postContext";
import PostReducer from "./postReducer";
import {
   GET_POST,
   ADD_POST,
   DELETE_POST,
   POST_ERROR,
   SET_CURRENT,
   CLEAR_CURRENT,
   UPDATE_POST,
   GET_USER_POST
} from "../type";

const PostState = (props) => {
   const initialState = {
      posts: [],
      userPosts: [],
      current: null,
      error: null,
      loading: true,
   };

   const [state, dispatch] = useReducer(PostReducer, initialState);

   // get public posts
   const getPost = async () => {
      try {
         const res = await axios.get("/api/posts");   
         dispatch({
            type: GET_POST,
            payload: res.data,
         });
      } catch (err) {
         dispatch({
            type: POST_ERROR,
            payload: err.response.msg
         });
      }
   };

   // get user posts
   const getUserPost = async (user) => {
      try {
         const res = await axios.get(`/api/posts/${user.id}`);   
         dispatch({
            type: GET_USER_POST,
            payload: res.data,
         });
      } catch (err) {
         dispatch({
            type: POST_ERROR,
            payload: err.response.msg
         });
      }
   };


   // add post
   const addPost = async (post) => {
      const config = {
         headers: {
            "Content-Type": "application/json",
         },
      };
      try {
         const res = await axios.post("/api/posts", post, config);
         dispatch({
            type: ADD_POST,
            payload: res.data,
         });
      } catch (err) {
         dispatch({
            type: POST_ERROR,
            payload: err.response.msg,
         });
      }
   };

   // update post 
   const updatePost = async (post) => {
      const config = {
         headers: {
            "Content-Type": "application/json",
         },
      };
      try {
         const res = await axios.put(`/api/posts/${post._id}`, post, config);
         dispatch({
            type: UPDATE_POST,
            payload: res.data,
         });
      } catch (err) {
         dispatch({
            type: POST_ERROR,
            payload: err.response.msg,
         });
      }
   };


   // delete post
   const deletePost = async (id) => {
      try {
         const res = await axios.delete(`/api/posts/${id}`);
         dispatch({
            type: DELETE_POST,
            payload: id,
         });
      } catch (err) {
         dispatch({
            type: POST_ERROR,
            payload: err.response.msg,
         });
      }
   };

   const setCurrent = (post) => {
      dispatch({
         type: SET_CURRENT,
         payload: post,
      });
   }
   const clearCurrent = () => dispatch({type:CLEAR_CURRENT});

   return (
      <PostContext.Provider
         value={{
            posts: state.posts,
            userPosts: state.userPosts,
            current: state.current,
            error: state.error,
            loading: state.loading,
            getPost,
            addPost,
            deletePost,
            updatePost,
            setCurrent,
            clearCurrent,
            getUserPost
         }}
      >
         {props.children}
      </PostContext.Provider>
   );
};

export default PostState;
