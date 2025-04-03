import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import Auth0ProviderWithHistory from "./components/Auth0ProviderWithHistory";
import './index.css'; // ✅ Required to apply styles

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Auth0ProviderWithHistory>
      <App />
    </Auth0ProviderWithHistory>
  </BrowserRouter>
);
