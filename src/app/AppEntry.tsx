import ReactDOM from "react-dom/client";
import { RouterProvider } from "./providers/RouterProvider";
import { StoreProvider } from "./providers/StoreProvider";
import "./styles/normalize.css";
import "./styles/index.css";
import "./styles/variables/pallete.css";
import "./styles/variables/typography.css";
import "./styles/variables/buttons.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <StoreProvider>
    <RouterProvider />
  </StoreProvider>
);
