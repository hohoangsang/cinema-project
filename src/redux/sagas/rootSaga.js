import { spawn } from 'redux-saga/effects';
import bannerSaga from './bannerSaga';
import eventSaga from './event.saga';
import moviesSaga from './moviesSaga';
import authSaga from './authSaga';
import searchSaga from './searchSaga';
import userSaga from './userSaga';
import userManagementSaga from './userManagementSaga';
import citySaga from './citySaga';

function* rootSaga() {
    yield spawn(bannerSaga);
    yield spawn(moviesSaga);
    yield spawn(eventSaga);
    yield spawn(authSaga);
    yield spawn(searchSaga);
    yield spawn(userSaga);
    yield spawn(userManagementSaga);
    yield spawn(citySaga);
}

export default rootSaga;