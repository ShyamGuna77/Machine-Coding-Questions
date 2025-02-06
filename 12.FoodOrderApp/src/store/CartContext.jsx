import { createContext, useReducer } from "react";

const CartContext = createContext({
  items: [],
  addItem: (item) => {},
  removeItem: (id) => {},
});

function CartReducer(state, action) {
  switch (action.type) {
    case "ADD_ITEM": {
      const existingCartItemIndex = state.items.findIndex(
        (item) => item.id === action.item.id
      );

      const updatedItems = [...state.items];

      if (existingCartItemIndex > -1) {
        const existingItem = state.items[existingCartItemIndex];
        updatedItems[existingCartItemIndex] = {
          ...existingItem,
          quantity: existingItem.quantity + 1,
        };
      } else {
        updatedItems.push({ ...action.item, quantity: 1 });
      }

      return { ...state, items: updatedItems };
    }

    case "REMOVE_ITEM": {
         const existingCartItemIndex = state.items.findIndex(
           (item) => item.id === action.id
         );
         const existingCartItem = state.items[existingCartItemIndex];

         const updatedItems = [...state.items];

         if (existingCartItem.quantity === 1) {
           updatedItems.splice(existingCartItemIndex, 1);
         } else {
           const updatedItem = {
             ...existingCartItem,
             quantity: existingCartItem.quantity - 1,
           };
           updatedItems[existingCartItemIndex] = updatedItem;
         }

         return { ...state, items: updatedItems };
    }
     

      default:
        return state;
  }
}

export function CartContextProvider({ children }) {
  const [cart, dispatchCartAction] = useReducer(CartReducer, { items: [] });

  function addItem(item) {
    dispatchCartAction({ type: "ADD_ITEM", item });
  }

  function removeItem(id) {
    dispatchCartAction({ type: "REMOVE_ITEM", id });
  }

  const contextValue = {
    items: cart.items,
    addItem,
    removeItem,
  };

  

  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
}



export default CartContext;


