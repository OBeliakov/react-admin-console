import { render } from "react-dom";
import { App } from "./app/App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "app/styles/index.scss";
import { ThemeProvider } from "app/providers/ThemeProvider";
import "shared/config/routeConfig/i18n/i18n";

render(
  <BrowserRouter>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
