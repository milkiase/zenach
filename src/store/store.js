import {createStore, compose, applyMiddleware} from 'redux';
import {persistReducer, persistStore} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import {logger} from 'redux-logger'
import rootReducer from './rootReducer'


const persistConfig = {
    key : 'root',
    storage,
    blacklist: ['user']
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
const middlewares = [logger];
const composeEnhancer = compose(applyMiddleware(...middlewares));
export const store = createStore(persistedReducer, undefined, composeEnhancer);

export const persistor = persistStore(store);