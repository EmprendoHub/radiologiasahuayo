import {
  EmailData,
  QRData,
  ShippingInfo,
  ShoppingState,
  UserInfo,
  Variation,
} from "@/types/models";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: ShoppingState = {
  productsData: [],
  productsPOS: [],
  favoritesData: [],
  userInfo: null,
  shippingInfo: null,
  orderData: {},
  emailListData: [],
  qrListData: [],
  loginAttempts: 0,
};

export const shoppingSlice = createSlice({
  name: "compras",
  initialState,
  reducers: {
    increaseLoginAttempts: (
      state,
      action: PayloadAction<{ count: number }>
    ) => {
      state.loginAttempts += action.payload.count;
    },
    addToPOSCart: (state, action: PayloadAction<Variation>) => {
      const existingProduct = state.productsPOS.find(
        (item) => item._id === action.payload._id
      );
      if (existingProduct) {
        existingProduct.quantity += action.payload.quantity;
      } else {
        state.productsPOS.push(action.payload);
      }
    },
    increasePOSQuantity: (state, action: PayloadAction<{ _id: string }>) => {
      const existingProduct = state.productsPOS.find(
        (item) => item._id === action.payload._id
      );

      if (existingProduct && existingProduct.stock > existingProduct.quantity) {
        existingProduct.quantity++;
      }
    },
    decreasePOSQuantity: (state, action: PayloadAction<{ _id: string }>) => {
      const existingProduct = state.productsPOS.find(
        (item) => item._id === action.payload._id
      );
      if (existingProduct && existingProduct.quantity > 1) {
        existingProduct.quantity--;
      }
    },
    deletePOSProduct: (state, action: PayloadAction<string>) => {
      state.productsPOS = state.productsPOS.filter(
        (item) => item._id !== action.payload
      );
    },
    resetPOSCart: (state) => {
      state.productsPOS = [];
    },
    addToCart: (state, action: PayloadAction<Variation>) => {
      const existingProduct = state.productsData.find(
        (item) => item._id === action.payload._id
      );
      if (existingProduct) {
        existingProduct.quantity += action.payload.quantity;
      } else {
        state.productsData.push(action.payload);
      }
    },
    increaseQuantity: (state, action: PayloadAction<{ _id: string }>) => {
      const existingProduct = state.productsData.find(
        (item) => item._id === action.payload._id
      );
      if (existingProduct) {
        existingProduct.quantity++;
      }
    },
    decreaseQuantity: (state, action: PayloadAction<{ _id: string }>) => {
      const existingProduct = state.productsData.find(
        (item) => item._id === action.payload._id
      );
      if (existingProduct) {
        if (existingProduct.quantity === 1) {
          existingProduct.quantity = 1;
        } else {
          existingProduct.quantity--;
        }
      }
    },
    deleteProduct: (state, action: PayloadAction<string>) => {
      state.productsData = state.productsData.filter(
        (item) => item._id !== action.payload
      );
    },
    resetCart: (state) => {
      state.productsData = [];
    },
    addToFavorites: (state, action: PayloadAction<Variation>) => {
      const existingProduct = state.favoritesData.find(
        (item) => item._id === action.payload._id
      );
      if (existingProduct) {
        state.favoritesData = state.favoritesData.filter(
          (item) => item._id !== action.payload._id
        );
      } else {
        state.favoritesData.push(action.payload);
      }
    },
    deleteFavorite: (state, action: PayloadAction<string>) => {
      state.favoritesData = state.favoritesData.filter(
        (item) => item._id !== action.payload
      );
    },
    resetFavorites: (state) => {
      state.favoritesData = [];
    },
    addUser: (state, action: PayloadAction<UserInfo>) => {
      state.userInfo = action.payload;
    },
    addShippingInfo: (state, action: PayloadAction<ShippingInfo>) => {
      state.shippingInfo = action.payload;
    },
    deleteUser: (state) => {
      state.userInfo = null;
    },
    saveOrder: (
      state,
      action: PayloadAction<Record<string, undefined>> // Replace with proper order type
    ) => {
      state.orderData = action.payload;
    },
    savePOSOrder: (
      state,
      action: PayloadAction<Record<string, undefined>> // Replace with proper order type
    ) => {
      state.orderData = action.payload;
    },
    repopulateCart: (state, action: PayloadAction<Variation>) => {
      state.productsData.push(action.payload);
    },
    repopulateFavorites: (state, action: PayloadAction<Variation>) => {
      state.favoritesData.push(action.payload);
    },
    resetOrder: (state) => {
      state.orderData = {};
    },
    saveEmailReceiver: (state, action: PayloadAction<EmailData>) => {
      const existingEmail = state.emailListData.find(
        (item) => item._id === action.payload.id
      );
      if (existingEmail) {
        state.emailListData = state.emailListData.filter(
          (item) => item._id !== action.payload.id
        );
      } else {
        state.emailListData.push(action.payload);
      }
    },
    removeEmailReceiver: (state, action: PayloadAction<string>) => {
      state.emailListData = state.emailListData.filter(
        (item) => item._id !== action.payload
      );
    },
    resetEmailReceiver: (state) => {
      state.emailListData = [];
    },
    saveQRToPrint: (state, action: PayloadAction<QRData>) => {
      const existingQR = state.qrListData.find(
        (item) => item._id === action.payload.id
      );
      if (existingQR) {
        state.qrListData = state.qrListData.filter(
          (item) => item._id !== action.payload.id
        );
      } else {
        state.qrListData.push(action.payload);
      }
    },
    removeQRToPrint: (state, action: PayloadAction<string>) => {
      state.qrListData = state.qrListData.filter(
        (item) => item._id !== action.payload
      );
    },
    resetQRToPrint: (state) => {
      state.qrListData = [];
    },
  },
});

export const {
  addToCart,
  increaseQuantity,
  decreaseQuantity,
  deleteProduct,
  resetCart,
  addToPOSCart,
  increasePOSQuantity,
  decreasePOSQuantity,
  deletePOSProduct,
  resetPOSCart,
  addUser,
  deleteUser,
  saveOrder,
  savePOSOrder,
  repopulateCart,
  addShippingInfo,
  saveEmailReceiver,
  removeEmailReceiver,
  resetEmailReceiver,
  repopulateFavorites,
  resetFavorites,
  deleteFavorite,
  addToFavorites,
  increaseLoginAttempts,
  saveQRToPrint,
  removeQRToPrint,
  resetQRToPrint,
} = shoppingSlice.actions;

export default shoppingSlice.reducer;
