import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import GlobalState from "./context.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <GlobalState>
      <App />
    </GlobalState>
  </StrictMode>,
);
