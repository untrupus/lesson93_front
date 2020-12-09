import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import {createBrowserHistory} from "history";
import usersReducer from "./reducers/usersReducer";
import {connectRouter, routerMiddleware} from "connected-react-router";
import createSagaMiddleware from "redux-saga";
import {rootSaga} from "./sagas";
import {loadFromLocalStorage, saveToLocalStorage} from "./localStorage";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const history = createBrowserHistory();

const rootReducer = combineReducers({

    users: usersReducer,
    router: connectRouter(history)
});

const sagaMiddleware = createSagaMiddleware();

const middleware = [
    routerMiddleware(history),
    sagaMiddleware
];

const enhancers = composeEnhancers(applyMiddleware(...middleware));

const persistedState = loadFromLocalStorage();

const store = createStore(rootReducer, persistedState, enhancers);

sagaMiddleware.run(rootSaga);

store.subscribe(() => {
    saveToLocalStorage({
        users: {
            user: store.getState().users.user
        }
    });
});

export default store;