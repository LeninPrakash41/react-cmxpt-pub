import dispatcher from "../appDispatcher";
import actionTypes from "./actionDataType";
import data from "../database.json";

export function getPosts() {
    dispatcher.dispatch({
        actionTypes: actionTypes.GET_POSTS,
        posts: data["posts"],
    });
}