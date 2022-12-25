import react, { useReducer } from "react";
import CartContext from "./cart-context";

const defaultCartState = { item: [], totalAmount: 0 };

const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    const updatedItems = state.item.concat(action.item);
    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;
    return {
      item: updatedItems,
      amount: updatedTotalAmount,
    };
  }
  return defaultCartState;
};

const CartProvider = (props) => {
  const [cartState, dispatchCartState] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addItemToCartHandler = (item) => {
    dispatchCartState({
      type: "ADD",
      item: { item },
    });
  };

  const removeItemFromCartHandler = (id) => {
    dispatchCartState({
      type: "REMOVE",
      id: id,
    });
  };

  const cartContext = {
    items: cartState.item,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
