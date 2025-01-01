import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "modern-css-reset";
//import styles 👇
import '@fontsource/inter';
import "react-modern-drawer/dist/index.css";
import "primereact/resources/themes/lara-light-blue/theme.css"; // Choose theme
import "primereact/resources/primereact.min.css";
import "primeflex/primeflex.css";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
