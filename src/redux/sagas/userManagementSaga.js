import { call, debounce, delay, put, takeLatest } from 'redux-saga/effects'
import { 
    fetchUsersSuccess, 
    FETCH_USERS_REQUEST, 
    setFilter, 
    SET_FILTER_WITH_DEBOUNCE
} from '../action/userManagementAction'
import {
    showLoading,
    hideLoading
} from '../action/loadingAction'

import userApi from '../../apis/userApi'

function* fetchUserList(action) {
    try {   
        yield put(showLoading());
        const { getList } = userApi;
        const { response } = yield call(getList, action.payload);
        yield put(fetchUsersSuccess({
            list: response.data,
            total: response.headers["x-total-count"]
        }));
        yield delay(800);
        yield put(hideLoading());
    } catch (error) {
        console.log("Saga error: ", error)
    }
}

function* handleSearchDebounce(action) {
    yield put(setFilter(action.payload));
}

function* userManagementSaga() {
    yield takeLatest(FETCH_USERS_REQUEST, fetchUserList)

    yield debounce(800, SET_FILTER_WITH_DEBOUNCE, handleSearchDebounce)
}

export default userManagementSaga