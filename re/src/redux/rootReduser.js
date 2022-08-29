import { combineReducers } from "redux";
import { footerReducer } from "./footer/footerReducer";
import { mainPageReducer } from "./mainPage/mainPageReducer";
import { postsReducer } from "./posts/postsReducer";

export const rootReducer = combineReducers({
mainPage: mainPageReducer,
footer: footerReducer,
posts: postsReducer
})