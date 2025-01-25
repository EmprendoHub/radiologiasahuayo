"use client";

import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, tienda, RootState } from "@/redux/store";
import { SessionProvider as NextAuthSessionProvider } from "next-auth/react";
import { JSX, PropsWithChildren } from "react";
import { Store } from "@reduxjs/toolkit";
import { Persistor } from "redux-persist";

const CustomSessionProvider = ({
  children,
}: PropsWithChildren): JSX.Element => {
  return (
    <Provider store={tienda as Store<RootState>}>
      <PersistGate loading={null} persistor={persistor as Persistor}>
        <NextAuthSessionProvider>{children}</NextAuthSessionProvider>
      </PersistGate>
    </Provider>
  );
};

export default CustomSessionProvider;
