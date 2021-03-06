import { StrictMode } from "react";
import * as ReactDOMClient from "react-dom/client";

// context
import { SearchProvider } from "context/SearchContext";
import { RouteProvider } from "context/RouterProvider";
import { LanguageProvider } from "context/LanguageProvider";

// app
import App from "./App";

const container = document.getElementById("root");

// Create a root.
const root = ReactDOMClient.createRoot(container);

// Initial render: Render an element to the root.
root.render(
  <StrictMode>
    <SearchProvider>
      <RouteProvider>
        <LanguageProvider>
          <App />
        </LanguageProvider>
      </RouteProvider>
    </SearchProvider>
  </StrictMode>
);
