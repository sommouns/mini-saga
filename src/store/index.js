import { createStore, applyMiddleware } from "redux";
import reducer from "./reducers";
import createSagaMiddleware from "../redux-saga";
import rootSaga from "./rootSaga";

const sagaMiddleware = createSagaMiddleware();
const store = applyMiddleware(sagaMiddleware)(createStore)(reducer);
sagaMiddleware.run(rootSaga);
export default store;
