import { createStore } from "redux";
import reducer from "../reducers";

const initialState = { isAuth: false };
export const store = createStore(reducer, initialState);