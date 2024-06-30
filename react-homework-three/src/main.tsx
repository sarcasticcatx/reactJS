import React from "react";
import ReactDOM from "react-dom/client";
import "./App.css";
import { App } from "./App";
import { BrowserRouter } from "react-router-dom";
import { ItemsProvider } from "./Context/ItemsContext";
import { GirlItemsProvider } from "./Context/GirlsItemsContext";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <GirlItemsProvider>
      <ItemsProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ItemsProvider>
    </GirlItemsProvider>
  </React.StrictMode>
);
