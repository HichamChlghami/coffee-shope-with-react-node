import * as ActionTypes from "./ActionTypes";

export const cart = (state = { cartList: [] }, action) => {
  switch (action.type) {
    case ActionTypes.ADD_TO_CART:
      const item = action.payload;

      const inCart = state.cartList.find((x) => x.product === item.product);

      if (inCart) {
        return {
          ...state,
          cartList: state.cartList.map((x) =>
            x.product === inCart.product ? { ...x, qty: x.qty + 1 } : x
          ),
        };
      } else {
        return {
          ...state,
          cartList: [...state.cartList, { ...item, qty: 1 }],
        };
      }
    case ActionTypes.REMOVE_FROM_CART:
      const moreThanOne = state.cartList.find((x) =>
        x.product === action.payload.product && x.qty > 1 ? true : false
      );
      return {
        ...state,
        cartList: moreThanOne
          ? state.cartList.map((x) =>
              x.product === action.payload.product
                ? { ...x, qty: x.qty - 1 }
                : x
            )
          : state.cartList.filter((x) => x.product !== action.payload.product),
      };
    default:
      return state;
  }
};
