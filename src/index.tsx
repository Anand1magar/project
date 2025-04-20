import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { LandingPageFinal } from "./screens/LandingPageFinal";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <LandingPageFinal />
  </StrictMode>,
);
