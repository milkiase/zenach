import {createStore, compose, applyMiddleware} from 'redux';
import {persistReducer, persistStore} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import {logger} from 'redux-logger';
import thunk from 'redux-thunk';
import rootReducer from './rootReducer';


const persistConfig = {
    key : 'root',
    storage,
    blacklist: ['user']
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
const middlewares = [(process.env.NODE_ENV !== 'production' && logger), thunk].filter(Boolean);
const selectedCompose = (
        process.env.NODE_ENV !== 'production' && 
        window && 
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ) ||
    compose;
const composeEnhancer = selectedCompose(applyMiddleware(...middlewares));
export const store = createStore(persistedReducer, undefined, composeEnhancer);

export const persistor = persistStore(store);