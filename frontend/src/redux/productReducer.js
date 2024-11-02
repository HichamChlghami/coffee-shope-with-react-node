import * as ActionTypes from "./ActionTypes";

export const product = (
  state = { isLoading: false, errMess: null, productList: [] },
  action
) => {
  switch (action.type) {
    case ActionTypes.ADD_PRODUCTS:
      return {
        ...state,
        isLoading: false,
        errMess: null,
        productList: action.payload,
      };
    case ActionTypes.PRODUCTS_LOADING:
      return {
        ...state,
        isLoading: true,
        errMess: null,
        productList: [],
      };
    case ActionTypes.PRODUCTS_FAILED:
      return {
        ...state,
        isLoading: false,
        errMess: action.payload,
      };
    default:
      return state;
  }
};
