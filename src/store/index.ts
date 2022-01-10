import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "@redux-saga/core";

import weatherReducer from "./reducer/weatherReducer";
import alertReducer from "./reducer/alertReducer";
import rootSaga from "./sagas/index";

const rootReducer = combineReducers({
  weather: weatherReducer,
  alert: alertReducer,
});

const sagaMiddleware = createSagaMiddleware();

const store = compose(
  applyMiddleware(sagaMiddleware),
  composeWithDevTools()
)(createStore)(rootReducer);

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof rootReducer>;

export default store;
