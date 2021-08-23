import { call, put, takeEvery } from 'redux-saga/effects';
import bannerApi from '../../apis/bannerApi';
import {
    GET_BANNER_REQUEST,
    getBannerSuccess,
    getBannerFail
} from '../action/bannerAction'

function* fetchBanner() {
    try {
        const { getAll } = bannerApi;
        const { data } = yield call(getAll)
        
        yield put(getBannerSuccess(data)) 
    } catch (error) {   
        console.log("Saga Fail: ", error)
        yield put(
            getBannerFail(error)
        );
    }
}

function* bannerSaga() {
    yield takeEvery(GET_BANNER_REQUEST, fetchBanner)
}

export default bannerSaga;