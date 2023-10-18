import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "./contexts/ThemeProvider.tsx";
import { AuthContextProvider } from "./contexts/AuthProvider";
import { AlertsProvider } from "./contexts/AlertsProvider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <AuthContextProvider>
          <BrowserRouter>
            <AlertsProvider />
            <App />
          </BrowserRouter>
        </AuthContextProvider>
      </ThemeProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
