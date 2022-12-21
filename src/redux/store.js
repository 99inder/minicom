// import { createStore } from "redux";
import { applyMiddleware, configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import rootReducer from "./reducers/index";

// const store = createStore(rootReducer);
const store = configureStore({
    reducer: rootReducer
}, applyMiddleware(thunk));

export default store;