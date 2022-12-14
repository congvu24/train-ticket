import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "antd/dist/antd.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  createBrowserRouter,
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Admin from "./pages/Admin";

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Router>
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route path="/admin" element={<Admin />} />
          <Route path="*" element={<App />} />
        </Routes>
      </QueryClientProvider>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
