import { combineReducers } from "redux";
import { contentReducers } from "./content.reducers";
import { Action } from "types/redux";

const appReducer = combineReducers({
  content: contentReducers,
});

const rootReducer = (state: Object, action: Action) => {
  return appReducer(state, action);
};

export default rootReducer;
