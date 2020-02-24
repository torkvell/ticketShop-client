// src/redux/index.js
import { createStore, applyMiddleware, compose } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import rootReducer from "./rootReducer";
import ReduxThunk from "redux-thunk";
const devTools = window.__REDUX_DEVTOOLS_EXTENSION__
  ? window.__REDUX_DEVTOOLS_EXTENSION__()
  : x => x;

const persistConfig = {
  key: "root",
  storage
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
const enhancer = compose(applyMiddleware(ReduxThunk), devTools);

export const store = createStore(persistedReducer, enhancer);
export const persistor = persistStore(store);
