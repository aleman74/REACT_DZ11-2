import {createStore, combineReducers, applyMiddleware} from 'redux';
import serviceList from "./reducers/serviceList";
import serviceItem from "./reducers/serviceItem";
import thunk from "redux-thunk";


const rootReducer = combineReducers({
    serviceList,
    serviceItem
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
