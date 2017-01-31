import { createStore, applyMiddleware, compose } from 'redux'
import moodboardApp from "./reducers" // All the reducer
import { } from "./actions"
// Middleware
import thunkMiddleware from 'redux-thunk'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(moodboardApp, composeEnhancers(
    applyMiddleware(thunkMiddleware)
));


export default store
