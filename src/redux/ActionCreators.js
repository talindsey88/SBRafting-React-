import * as ActionTypes from "./ActionTypes";


export const fyadventureFormSubmitted = (payload) => ({
    type: ActionTypes.FYADVENTURE_FORM_SUBMITTED,
    payload: payload
});

export const resetCards = () => ({
    type: ActionTypes.RESET_CARDS,
    payload: false
});