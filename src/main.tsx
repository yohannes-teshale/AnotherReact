import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import ExpenseItem from "./components/ExpenseItem";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <div className="flex justify-center md:p-10 p-4 flex-col items-center space-y-6">
      <App />
    </div>
  </React.StrictMode>
);
