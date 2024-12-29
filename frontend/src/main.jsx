import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { LoginProvider } from "./LoginContext"; // Import the LoginProvider

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <LoginProvider> {/* Wrap the entire App with LoginProvider */}
      <App />
    </LoginProvider>
  </StrictMode>
);