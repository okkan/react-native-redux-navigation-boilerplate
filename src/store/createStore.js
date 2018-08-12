import { AsyncStorage } from "react-native";
import { createStore, applyMiddleware, compose } from "redux";
import promiseMiddleware from "redux-promise-middleware";
import thunkMiddleware from "redux-thunk";
import reducers from "./reducers/combineReducers";
import requestMiddleware from "../_core/requestMiddleware";
import { persistStore, persistReducer } from "redux-persist";
import { middleware } from "../_core/navigator/reduxNav";

const composeEnhancers = compose;
const promiseTypeSuffixes = ["LOADING", "SUCCESS", "ERROR"];

const persistConfig = {
  key: "state",
  storage: AsyncStorage,
  blacklist: ["nav", "loading", "alert", "call"]
};

const middleWare = applyMiddleware(
  thunkMiddleware,
  promiseMiddleware({ promiseTypeSuffixes }),
  requestMiddleware(),
  middleware
);

const persistedReducer = persistReducer(persistConfig, reducers);
const store = createStore(persistedReducer, composeEnhancers(middleWare));
let persistor = persistStore(store);

export { store, persistor };
