import { GET_POSTS_FAILURE, GET_POSTS_REQUEST, GET_POSTS_SUCCESS, GET_POST_FAILURE, GET_POST_REQUEST, GET_POST_SUCCESS } from "./postsTypes";

const initialState = {
    posts: [],
    //adress: '',
    //logo: {},
   //info: ''
}

export const postsReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case GET_POSTS_REQUEST: {
            return {loading: true};
        }
        case GET_POSTS_SUCCESS: {
            return {
            loading: false, 
            posts: payload,
            //title: payload.acf.title
        }
        }
        case GET_POSTS_FAILURE: {
            return {
            loading: false,
            error: payload
        }
        }
        default:
      return state; 
    }
}
export const productReducer = (state = { post: {} }, action) => {
    switch (action.type) {
      case GET_POST_REQUEST:
        return { loading: true };
      case GET_POST_SUCCESS:
        return { loading: false, product: action.payload };
      case GET_POST_FAILURE:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };