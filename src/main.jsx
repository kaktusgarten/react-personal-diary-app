import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import App from "./App.jsx";
import "./App.css";
import FullPageContextProvider from "./context/FullPageContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <FullPageContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </FullPageContextProvider>
  </StrictMode>
);
