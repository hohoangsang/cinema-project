import {
    GET_EVENT_REQUEST,
    getEventSuccess,
    getEventFail,

    GET_DETAIL_EVENT_REQUEST,
    getDetailEventSuccess,
    getDetailEventFail
} from '../action/eventAction'

import {
    showLoading,
    hideLoading
} from '../action/loadingAction'

import eventApi from '../../apis/eventApi'
import { call, delay, put, takeEvery, select } from 'redux-saga/effects';

function* fetchEvent() {
    try {
        yield put(showLoading());
        const { getAll } = eventApi;
        const { data } = yield call(getAll)
        yield put(getEventSuccess(data));
        yield delay(800);
        yield put(hideLoading());
    } catch (error) {
        console.log("Saga Fail: ", error)
        yield put(
            getEventFail(error)
        );
    }
}

function* fetchEventDetail() {
    try {
        yield put(showLoading());
        const { getDetail } = eventApi;
        const { slug } = yield select(state => state.event);
        const { data } = yield call(getDetail, slug);
        yield put(getDetailEventSuccess(data));
        yield delay(800);
        yield put(hideLoading());
    } catch (error) {
        yield put(getDetailEventFail(error))
    }
}

function* eventSaga() {
    yield takeEvery(GET_EVENT_REQUEST, fetchEvent)
    yield takeEvery(GET_DETAIL_EVENT_REQUEST, fetchEventDetail)
}

export default eventSaga;