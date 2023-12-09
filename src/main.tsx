import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import App from "./routes";
import { Toaster } from "./components/ui/toaster";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
    <Toaster />
  </React.StrictMode>
);
