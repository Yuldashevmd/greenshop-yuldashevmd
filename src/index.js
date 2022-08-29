import React from "react";
import ReactDOM from "react-dom/client";
import Context from "./components/context";
import "./index.css";
import Root from "./root";
import "react-alice-carousel/lib/alice-carousel.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Context>
      <Root />
    </Context>{" "}
  </React.StrictMode>
);
