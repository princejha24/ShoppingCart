import { createSlice } from "@reduxjs/toolkit";


const CartSlice = createSlice({
  name: "cart",
  initialState: { items: [] },
  reducers: {
    add: (state, action) => {
      const existingItem = state.items.find(
        item => item.id === action.payload.id
      );

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({
          ...action.payload,
          
          quantity: 1
        });
      }
    },

    remove: (state, action) => {
      const item = state.items.find(
        item => item.id === action.payload
      );

      if (item) {
        item.quantity -= 1;

        if (item.quantity <= 0) {
          state.items = state.items.filter(
            i => i.id !== action.payload
          );
        }
      }
    },
     removeItem: (state, action) => {
      state.items = state.items.filter(
        item => item.id !== action.payload
      );
    }

  }
});
export const { add, remove, removeItem } = CartSlice.actions;
export default CartSlice.reducer;
export { CartSlice };

