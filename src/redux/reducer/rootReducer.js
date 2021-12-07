import {combineReducers} from 'redux'
import bannerReducer from './bannerReducer';
import moviesReducer from './moviesReducer';
import eventReducer from './eventReducer';
import filterReducer from './filterReducer';
import authReducer from '../reducer/authReducer';
import loadingReducer from '../reducer/loadingReducer';
import searchReducer from '../reducer/searchReducer';
import { connectRouter } from 'connected-react-router';
import { history } from '../../utils/history';
import userReducer from './userReducer';
import userManagementReducer from './userManagementReducer';
import cityReducer from './cityReducer';

export default combineReducers({
    router: connectRouter(history),
    banner: bannerReducer,
    movies: moviesReducer,
    event: eventReducer,
    filter: filterReducer,
    auth: authReducer,
    loading: loadingReducer,
    search: searchReducer,
    user: userReducer,
    userManagement: userManagementReducer,
    city: cityReducer
})