import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "@tanstack/react-router";

import { getRouter } from "./router";
import "./styles.css";

const basepath = import.meta.env.BASE_URL.replace(/\/$/, "");
const router = getRouter({ basepath });
const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("Static app root element was not found.");
}

createRoot(rootElement).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
