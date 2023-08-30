import {createStore, compose, applyMiddleware} from 'redux'
import {logger} from 'redux-logger'
import rootReducer from './rootReducer'

const composeEnhancer = compose(applyMiddleware(logger))
export const store = createStore(rootReducer, undefined, composeEnhancer)