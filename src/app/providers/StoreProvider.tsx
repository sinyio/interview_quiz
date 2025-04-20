import { PropsWithChildren } from "react";
import { Provider } from "react-redux";
import { store } from "../appStore";

export const StoreProvider = ({ children }: PropsWithChildren) => {
  return <Provider store={store}>{children}</Provider>;
};
