import * as ActionTypes from "./ActionTypes";


export const Destinations = (state={
    destinations: [{ isFlipped: false},
     { isFlipped: false},
     { isFlipped: false},
    { isFlipped: false}]
}, action) => {
    switch(action.type){
        case ActionTypes.FYADVENTURE_FORM_SUBMITTED:
            const newArray = [...state.destinations];
            newArray[action.payload.id].isFlipped = true;
            return {...state, destinations: newArray};
        default: 
            return state;
    }
};