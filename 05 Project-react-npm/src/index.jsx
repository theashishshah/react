import React from "react";
import { createRoot } from "react-dom/client";
import app from "./App.jsx";

const container = document.getElementById("root")
const root = createRoot(container);
root.render(React.createElement(app))