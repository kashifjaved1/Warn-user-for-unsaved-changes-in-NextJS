import * as actionTypes from './actionTypes';

// export const increment = () => ({
//     type: actionTypes.INCREMENT,
// });

// export const decrement = () => ({
//     type: actionTypes.DECREMENT,
// });

export const saveChanges = (count) => {
    return {
        type: actionTypes.SAVE_CHANGES,
        payload: count
    }
};

export const dataChanged = (value) => ({
    type: actionTypes.DATA_CHANGED,
    payload: value
})