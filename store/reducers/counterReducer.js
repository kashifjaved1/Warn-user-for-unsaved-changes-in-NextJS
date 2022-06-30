import * as actionTypes from '../actions/actionTypes';
import { updateProperties } from '../utility';

const initialState = {
    count: 0,
    // userWarning: false,
    isDataChanged: false,
}

const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        // case actionTypes.INCREMENT:
        //     return updateProperties(state, { count: state.count + 1, userWarning: true });
            
        // case actionTypes.DECREMENT:
        //     return updateProperties(state, { count: state.count > 0 ? state.count - 1 : state.count, userWarning: true });

        case actionTypes.DATA_CHANGED: 
            return updateProperties(state, { isDataChanged: action.payload });

        case actionTypes.SAVE_CHANGE:
            return updateProperties(state, {count: action.payload, isDataChanged: false});

        default:
            return state;
    }
}

export default counterReducer;