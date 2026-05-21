import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import "./css/output.css";

createRoot(document.getElementById("root")).render(<App />);
