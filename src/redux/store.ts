import { configureStore } from "@reduxjs/toolkit";
import shoppingReducer from "./shoppingSlice";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  WebStorage,
} from "redux-persist";
import createWebStorage from "redux-persist/es/storage/createWebStorage";
import { Storage } from "redux-persist/es/types";

interface CustomStorage extends Storage {
  getItem(key: string): Promise<string | null>;
  setItem(key: string, value: string): Promise<void>;
  removeItem(key: string): Promise<void>;
}

export function createPersistStorage(): CustomStorage {
  const isServer = typeof window === "undefined";

  if (isServer) {
    return {
      getItem() {
        return Promise.resolve(null);
      },
      setItem() {
        return Promise.resolve();
      },
      removeItem() {
        return Promise.resolve();
      },
    };
  }
  return createWebStorage("local") as WebStorage;
}

const storage =
  typeof window !== "undefined"
    ? (createWebStorage("local") as WebStorage)
    : createPersistStorage();

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

const persistedReducer = persistReducer(persistConfig, shoppingReducer);

export const tienda = configureStore({
  reducer: { compras: persistedReducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(tienda);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof tienda.getState>;
export type AppDispatch = typeof tienda.dispatch;
