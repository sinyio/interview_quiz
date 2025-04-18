import { PropsWithChildren } from "react";
import { Provider } from "react-redux";
import { store } from "../store/appStore";

export const StoreProvider = ({ children }: PropsWithChildren) => {
  return <Provider store={store}>{children}</Provider>;
};
