import {
    GET_FILTER_MOVIES_REQUEST,
    getFilterMoviesSuccess,
    getFilterMoviesFail,

    GET_ONE_MOVIES_REQUEST,
    getOneMoviesSuccess,
    getOneMoviesFail
} from '../action/moviesAction'

import {
    showLoading,
    hideLoading
} from '../action/loadingAction'

import moviesApi from '../../apis/moviesApi'
import { takeEvery, put, fork, join, select, delay, call } from 'redux-saga/effects';

function* fetchFilterMovies() {
    try {
        yield put(showLoading())
        const { getAll } = moviesApi;
        const filterParams = yield select(state => state.filter);
        const forkTask = yield fork(getAll, filterParams);
        const { data } = yield join(forkTask);

        yield put(getFilterMoviesSuccess(data));
        yield delay(1000);
        yield put(hideLoading());
    } catch (error) {
        yield put(
            getFilterMoviesFail(error)
        );
    }
}

function* fetchOneMovie() {
    try {
        yield put(showLoading())
        const { getOneMovie } = moviesApi;
        const { slug } = yield select(state => state.movies)
        const { data } = yield call(getOneMovie, slug);
        yield put(getOneMoviesSuccess(data))
        yield delay(500);
        yield put(hideLoading())
    } catch (error) {
        yield put(getOneMoviesFail(error))
    }
}

function* moviesSaga() {
    yield takeEvery(GET_FILTER_MOVIES_REQUEST, fetchFilterMovies);
    yield takeEvery(GET_ONE_MOVIES_REQUEST, fetchOneMovie)

}

export default moviesSaga;