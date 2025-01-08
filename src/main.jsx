import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

//import styles 👇
import "@fontsource/inter";
import "react-modern-drawer/dist/index.css";
import "modern-css-reset";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
