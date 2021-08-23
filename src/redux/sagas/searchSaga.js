import {
    SEARCH_MOVIE_REQUEST,
    searchMovieSuccess,
    searchMovieFail
} from '../action/searchAction'

import { call, put, select, takeEvery } from 'redux-saga/effects'
import moviesApi from '../../apis/moviesApi'

function* handleSearchMovie() { 
    try {
        const searchParams = yield select(state => state.search.search)
        const { getSearchMovie } = moviesApi;
        const { data } = yield call(getSearchMovie, searchParams);
        yield put(searchMovieSuccess(data));
    } catch (error) {
        yield put(searchMovieFail(error))
    }
}

function* searchSaga() {
    yield takeEvery(SEARCH_MOVIE_REQUEST, handleSearchMovie)
}

export default searchSaga;