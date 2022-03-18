import {createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { combineReducers } from 'redux';
import { courseReducer } from '../controller/courses';
import {inquiryReducer} from '../controller/inquiries'

const rootReducer = combineReducers({courses: courseReducer, inquiries: inquiryReducer})

const store = createStore(rootReducer,composeWithDevTools(applyMiddleware(thunk)));

export default store;