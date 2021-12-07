import { ActionTypes } from '../contants/actionTypes';

const initialState = {
    propertyData: []
}


export const propertyReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ActionTypes.SET_PROPERTY_DATA:
            return {...state, propertyData : payload};     
        default:
            return state;
    }
}