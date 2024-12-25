import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

function MyApp() {
  return <h1>I am MyApp func</h1>;
}

const anotherUser = "professor"

const reactElement = React.createElement(
  "a",
  {
    href: "https://google.com",
    target: "_blank",
  },
  "click me to visit google",
  anotherUser
);

createRoot(document.getElementById("root"))
  .render(

  // <MyApp />
  // <App />
  // App()
  reactElement

);
