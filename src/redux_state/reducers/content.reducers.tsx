import { Action } from "types/redux";
import * as actionTypes from "../actions/actionTypes";

export const contentReducers = (state: Object, action: Action) => {
  switch (action.type) {
    case actionTypes.GET_CATEGORIES:
      return { ...state, categories: action.payload };
    case actionTypes.GET_PRODUCTS_BY_ID:
      return { ...state, productsById: action.payload };
    case actionTypes.GET_CATEGORY_BY_ID:
      return { ...state, categoryById: action.payload };
    case actionTypes.GET_LOCATION:
      return { ...state, location: action.payload };
    default:
      return { ...state };
  }
};
