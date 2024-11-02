import * as ActionTypes from "./ActionTypes";
import axios from "axios";

export const productsLoading = () => async (dispatch) => {
  try {
    dispatch({ type: ActionTypes.PRODUCTS_LOADING });

    const { data } = await axios.get("/api/products");
    console.log("Data:", data);
    setTimeout(() => {
      dispatch({
        type: ActionTypes.ADD_PRODUCTS,
        payload: data,
      });
    }, 2000);
  } catch (error) {
    dispatch({
      type: ActionTypes.PRODUCTS_FAILED,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const addToCart = (productId) => async (dispatch, getState) => {
  const { data } = await axios.get(`/api/products/${productId}`);

  dispatch({
    type: ActionTypes.ADD_TO_CART,
    payload: {
      product: data._id,
      name: data.name,
      price: data.price,
      image: data.image,
    },
  });

  localStorage.setItem("cart", JSON.stringify(getState().cart.cartList));
};

export const removeFromCart = (product, qty) => (dispatch, getState) => {
  dispatch({
    type: ActionTypes.REMOVE_FROM_CART,
    payload: { product, qty },
  });

  localStorage.setItem("cart", JSON.stringify(getState().cart.cartList));
};
