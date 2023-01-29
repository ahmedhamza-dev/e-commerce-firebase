import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { ProductData } from "../../shared/Models.model";

const cartItems: ProductData[] = [];
export const sucessAlert = (msg: string) => {
  toast.success(msg, {
    position: "top-right",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: false,
    progress: undefined,
    theme: "light",
  });
};
const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: cartItems,
    totalAmount: 0,
    totalQuantity: 0,
  },
  reducers: {
    addItemToCart: (state, action) => {
      const newItem = action.payload as ProductData;
      const existingItem = state.cartItems.find(
        (item: ProductData) => item.id === newItem.id
      );
      if (!existingItem) {
        newItem.quantity = 1;
        state.cartItems.push(newItem);
      } else {
        existingItem.quantity++;
        existingItem.totalPrice = +existingItem.quantity * +existingItem.price;
      }
      state.totalQuantity++;
      sucessAlert("Item added to cart!");
      state.totalAmount = state.cartItems.reduce(
        (total, item) => total + Number(item.price) * Number(item.quantity),
        0
      );
    },
    deleteItem: (state, action) => {
      const id = action.payload;
      const selectedProduct = state.cartItems.find(
        (product) => +product.id === id
      );
      state.cartItems = state.cartItems.filter((item) => +item.id !== id);
      state.totalQuantity =
        state.totalQuantity - (selectedProduct?.quantity || 0);
      state.totalAmount = state.cartItems.reduce(
        (total, item) => total + Number(item.price) * Number(item.quantity),
        0
      );
      sucessAlert("Item is deleted!");
    },
  },
});
export const { addItemToCart, deleteItem } = cartSlice.actions;
export default cartSlice.reducer;
