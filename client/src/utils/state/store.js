import { createStore } from "redux";
import {reducers} from "./reducers";

const initialState = {
    getStories: [],
}

export default createStore(reducers, initialState);