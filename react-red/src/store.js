import { createStore } from "redux"
import rotateReducer from "./reducers/rotateReducer"

function configureStore (state = {rotating: true}){
console.log(state);
return createStore(rotateReducer, state);
}

export default configureStore;
