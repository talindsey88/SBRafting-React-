import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import {createForms} from "react-redux-form";


export const ConfigureStore = () => createStore(
        combineReducers({
            ...createForms({

            })
        }),
        applyMiddleware(thunk, logger)
    );