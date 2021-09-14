import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import {createForms} from "react-redux-form";
import { FYAdventure } from "./forms";
import { Destinations } from "./destinations";

export const ConfigureStore = () => createStore(
        combineReducers({
            destinations: Destinations,
            ...createForms({
                fyadventure: FYAdventure
            })
        }),
        applyMiddleware(thunk, logger)
    );