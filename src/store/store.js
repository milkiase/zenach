import {createStore, compose, applyMiddleware} from 'redux';
import {persistReducer, persistStore} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import {logger} from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import { rootSaga } from './rootSaga';
import rootReducer from './rootReducer';


const persistConfig = {
    key : 'root',
    storage,
    blacklist: ['user']
};

const sagaMiddleware = createSagaMiddleware()
const persistedReducer = persistReducer(persistConfig, rootReducer);
const middlewares = [(process.env.NODE_ENV !== 'production' && logger), sagaMiddleware].filter(Boolean);
const selectedCompose = (
        process.env.NODE_ENV !== 'production' && 
        window && 
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ) ||
    compose;
const composeEnhancer = selectedCompose(applyMiddleware(...middlewares));
export const store = createStore(persistedReducer, undefined, composeEnhancer);
sagaMiddleware.run(rootSaga);
export const persistor = persistStore(store);