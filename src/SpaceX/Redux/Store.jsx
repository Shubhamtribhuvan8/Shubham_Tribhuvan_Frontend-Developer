import { legacy_createStore as createStore, applyMiddleware } from "redux";
import Reducer from "./Reducer";
import { logger } from "redux-logger";
const Store = createStore(Reducer, applyMiddleware(logger));

export default Store;
