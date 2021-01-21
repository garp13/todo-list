import { combineReducers } from 'redux';
import todoLists from "./todoLists";

const appReducers = combineReducers({
    todoLists,
})

export default appReducers;