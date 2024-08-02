import { createStore, compose, applyMiddleware } from "redux";
import { createBrowserHistory } from "history";
import {thunk} from "redux-thunk";
import promise from "redux-promise-middleware";
import storage from "redux-persist/lib/storage";
import { persistStore, persistReducer } from "redux-persist";
import { routerMiddleware } from "react-router-redux";
import rootReducer from "redux_state/reducers/reducers";

const middleware = applyMiddleware(
  promise,
  thunk,
  routerMiddleware(createBrowserHistory())
);

const persistConfig = {
  key: "rustblaze",
  storage,
  whitelist: ["auth"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persistedReducer, compose(middleware));
const persistor = persistStore(store);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export default store;
export { persistor };
