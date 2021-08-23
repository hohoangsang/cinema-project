import { routerMiddleware } from 'connected-react-router';
import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { history } from '../utils/history';
import rootReducer from './reducer/rootReducer';
import rootSaga from './sagas/rootSaga';


const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware, routerMiddleware(history)));

sagaMiddleware.run(rootSaga);

export default store
