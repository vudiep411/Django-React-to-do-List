import { combineReducers } from "redux";
import users from './users'
import tasks from "./tasks";

export default combineReducers({ users, tasks })