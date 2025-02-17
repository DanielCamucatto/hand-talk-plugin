import { createRoot } from "react-dom/client";
import "./index.css";
import { App } from "./App";
import { ThemeProvider } from "./contexts/ThemeContext";
import React from "react";

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
