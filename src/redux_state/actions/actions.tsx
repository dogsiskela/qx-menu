import { getRequest, postRequest } from "api/requestBuilder";
import * as actionTypes from "./actionTypes";
import { apiEndpoints } from "api/api_links";
import axios from "axios";
import { AppThunk } from "redux_state/config/types";
import { Category, Product } from "types/redux";


export const getLocationAction = (): AppThunk => async (dispatch: Function, getState: Function) => {
  const response = await getRequest(apiEndpoints.GET_LOCATIONS_API);

  dispatch({
    type: actionTypes.GET_LOCATION,
    payload: response.data,
  });
};


export const getCategoriesAction = (): AppThunk => async (dispatch: Function, getState: Function) => {
  const response = await getRequest(apiEndpoints.GET_PRODUCT_CATEGORIES_API);

  dispatch({
    type: actionTypes.GET_CATEGORIES,
    payload: response.data
  });
};


export const getProductsByIdAction = (categoryId: string) => async (dispatch: Function, getState: Function) => {
  const response = await getRequest(apiEndpoints.GET_PRODUCTS_API);

  const items = response.data.filter((el: Product) => el.category_id === +categoryId);


  dispatch({
    type: actionTypes.GET_PRODUCTS_BY_ID,
    payload: items,
  });
};



export const getCategoryByIdAction = (categoryId: string) => async (dispatch: Function, getState: Function) => {
  const response = await getRequest(apiEndpoints.GET_PRODUCT_CATEGORIES_API);

  const item = response.data.find((el: Category) => el.id === +categoryId);


  dispatch({
    type: actionTypes.GET_CATEGORY_BY_ID,
    payload: item,
  });
};

