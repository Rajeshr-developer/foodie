import { createStore, applyMiddleware, compose as reduxCompose } from 'redux';
import { rootReducer } from './rootReducer'
import thunk from 'redux-thunk';

const compose = typeof window !== 'undefined' ? (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || reduxCompose : reduxCompose;

export const store = createStore(rootReducer, compose(applyMiddleware(thunk)));