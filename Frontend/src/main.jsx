import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import router from "./routes";
import { RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import { store, persistor } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";
import ThemeComponent from "./components/ThemeComponent";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <PersistGate persistor={persistor}>
      <Provider store={store}>
        <ThemeComponent>
          <RouterProvider router={router} />
        </ThemeComponent>
      </Provider>
    </PersistGate>
  </React.StrictMode>
);
