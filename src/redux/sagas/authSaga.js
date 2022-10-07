import { push } from "connected-react-router";
import jwt from 'jsonwebtoken';
import { toast } from "react-toastify";
import { call, delay, put, takeEvery } from "redux-saga/effects";
import authApi from '../../apis/authApi';
import userApi from "../../apis/userApi";
import { LOG_IN_PATH, ROOT_PATH, default_avatar } from '../../constant/route';
import {
    logInFail,
    logInSuccess,
    LOG_IN_REQUEST,
    LOG_OUT_REQUEST,

    registerFail,
    registerSuccess,
    REGISTER_REQUEST,
    WATCH_IS_LOGGED
} from '../action/authAction';
import { hideLoading, showLoading } from "../action/loadingAction";
import jwt_decode from "jwt-decode";
import { updateUserSuccess } from "../action/userAction";

function* handleLogIn(action) {
    try {
        const { getUserByEmail } = userApi;
        const userData = action.payload;
        const { response } = yield call(getUserByEmail, userData.email);
        if(userData.password === response.data[0].password) {
            yield put(showLoading());
            const token = jwt.sign({ id:response.data[0].id }, "login", {expiresIn: '1h'});
            sessionStorage.setItem('access_token', token);
            sessionStorage.setItem('userId', response.data[0].id);
            yield put(updateUserSuccess(response.data[0]));
            yield put(logInSuccess());
            if(response.data[0].isAdmin) {
                sessionStorage.setItem("isAdmin", true)
            }
            yield put(push(ROOT_PATH));
            yield delay(500);
            toast.success("Đăng nhập thành công!");
            yield delay(500);
            yield put(hideLoading())
        } else {
            yield put(logInFail("Email hoặc mật khẩu không đúng"));
        }
    } catch (error) {
        console.log("Saga fail", error);
        toast.error("Đăng nhập thất bại!");
        yield put(logInFail("Email hoặc mật khẩu không đúng"));
        yield put(hideLoading());
    }
}

function* handleRegister(action) {
    try {
        yield put(showLoading());
        const { register } = authApi;
        const { getUserByEmail } = userApi;
        const userData = action.payload;
        const { response } = yield call(getUserByEmail, userData.email);
        if (response.data.length>0) {
            yield put(registerFail("Email đã tồn tại"));
        } else {
            const user = {
                ...userData,
                isAdmin: false,
                default_avatar
            }
            yield call(register, user);
            yield delay(500);
            yield put(push(LOG_IN_PATH));
            yield delay(500);
            toast.success("Đăng ký thành công");
        }
        yield delay(500);
        yield put(hideLoading());
    } catch (error) {
        console.log("saga fail", error);
        yield put(registerFail(error));
        yield put(registerFail("Đăng ký thất bại"));
    }
}

function* handleLogOut() {
    yield put(showLoading());
    yield delay(800);
    yield sessionStorage.removeItem("access_token")
    yield sessionStorage.removeItem("isAdmin")
    yield sessionStorage.removeItem("userId")
    yield put(push(LOG_IN_PATH))
    yield put(hideLoading());
}

function* handleWatchIsLoggedd(action) {
    try {
        const decode = yield jwt_decode(action.payload);
        const { getUserById } = userApi;
        const { data } = yield call(getUserById, decode.id);
        yield put(updateUserSuccess(data));
        yield put(logInSuccess());
    } catch (error) {
        yield put(logInFail(error))
    }
}

function* authSaga() {
    yield takeEvery(LOG_IN_REQUEST, handleLogIn);
    yield takeEvery(LOG_OUT_REQUEST, handleLogOut);
    yield takeEvery(REGISTER_REQUEST, handleRegister);
    yield takeEvery(WATCH_IS_LOGGED, handleWatchIsLoggedd);
}

export default authSaga;