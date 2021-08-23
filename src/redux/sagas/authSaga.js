import { push } from 'connected-react-router';
import { toast } from "react-toastify";
import { call, delay, put, takeEvery } from "redux-saga/effects";
import authApi from '../../apis/authApi';
import userApi from '../../apis/userApi';
import { LOG_IN_PATH } from "../../constant/route";
import {
    logInSuccess, LOG_IN_REQUEST,
    LOG_OUT_REQUEST, registerFail, registerRequest, registerSuccess
} from '../action/authAction';


function* handleLogIn() {
    localStorage.setItem("token", "secretToken");
    yield delay(1000);
    toast.success('Đăng kí thành công');
    yield put(logInSuccess([]));
}

function* handleRegister(action) {
    try {
        const { register } = authApi;
        const { getUserByEmail } = userApi;
        const userData = action.payload;
        const { data } = yield call(getUserByEmail, userData.email);
        console.log(data);
        if (data) {
            toast.error("Email đã tồn tại");
        } else {
            const user = {
                ...userData,
                isAdmin: false,
            }
            yield call(register, user);
            yield put(registerSuccess(user));
            yield delay(500);
            yield put(push(LOG_IN_PATH));
            yield delay(500);
            toast.success("Đăng kí thành công");
        }
    } catch (error) {
        yield put(registerFail(error));
        toast.error("Đăng kí thất bại");
    }
}

function* handleLogOut() {
    yield delay(1000);
    yield localStorage.removeItem("token")
}

function* authSaga() {
    yield takeEvery(LOG_IN_REQUEST, handleLogIn);
    yield takeEvery(LOG_OUT_REQUEST, handleLogOut);
    yield takeEvery(registerRequest, handleRegister);
}

export default authSaga;