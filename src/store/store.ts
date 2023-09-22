import {createStore, compose, applyMiddleware, Middleware} from 'redux';
import {persistReducer, persistStore, PersistConfig} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import { rootSaga } from './rootSaga';
import rootReducer from './rootReducer';

export type TRootState = ReturnType<typeof rootReducer>

export type ExtendedPersistConfig = PersistConfig<TRootState> & {
    blacklist ?: (keyof TRootState)[],
    whitelist ?: (keyof TRootState)[]
}
const persistConfig:ExtendedPersistConfig = {
    key : 'root',
    storage,
    blacklist: ['user']
};

const sagaMiddleware = createSagaMiddleware()
const persistedReducer = persistReducer(persistConfig, rootReducer);
const middlewares:Middleware[] = [(process.env.NODE_ENV !== 'production' && logger), sagaMiddleware]
    .filter((middleware):middleware is Middleware => Boolean(middleware));

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose
    }
}
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