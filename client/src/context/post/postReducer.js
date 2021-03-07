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

export default (state, action) => {
   switch (action.type) {
      case GET_POST:
         return {
            ...state,
            posts: action.payload,
            loading: false,
         };

         case GET_USER_POST:
         return {
            ...state,
            userPosts: action.payload,
            loading: false,
         };

      case ADD_POST:
         return {
            ...state,
            loading: false,
            posts: [action.payload, ...state.posts],
         };
      case UPDATE_POST:
         return {
            ...state,
            loading: false,
            posts: state.posts.map((post) =>
               post._id === action.payload._id ? action.payload : post
            ),
         };
      case DELETE_POST:
         return {
            ...state,
            loading: false,
            posts: state.posts.filter((post) => post._id !== action.payload),
         };
      case SET_CURRENT:
         return {
            ...state,
            current: action.payload,
         };
      case CLEAR_CURRENT:
         return {
            ...state,
            current: null,
         };
      case POST_ERROR:
         return {
            ...state,
            error: action.payload,
         };

      default:
         return state;
   }
};
