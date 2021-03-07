import {
   SET_CURRENT_USER,
   CLEAR_CURRENT_USER,
   UPDATE_USER,
   USER_ERROR,
   USER_RELOADED,
} from "../type";

export default (state, action) => {
   switch (action.type) {
      case SET_CURRENT_USER:
         return {
            ...state,
            currentUser: action.payload,
         };

      case CLEAR_CURRENT_USER:
         return {
            ...state,
            currentUser: null,
         };

         case USER_RELOADED:
         return{
             ...state,
             isAuthenticated: true,
             user: action.payload
         }

      case USER_ERROR:
         return {
            ...state,
            error: action.payload,
         };

      default:
         return state;
   }
};
