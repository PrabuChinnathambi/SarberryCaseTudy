import { propertyReducer } from './propertyReducer';
import { combineReducers } from 'redux';

const reducers = combineReducers({
    property : propertyReducer
})



export default reducers;