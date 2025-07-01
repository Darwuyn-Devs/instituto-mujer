import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles/index.css";
import { ErrorBoundary } from "./components/ErrorBoundary";

const root = document.getElementById("root");

if (!root) {
  console.error("Elemento #root no encontrado.");
} else {
  const appRoot = ReactDOM.createRoot(root);
  appRoot.render(
    <React.StrictMode>
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
    </React.StrictMode>
  );
}
