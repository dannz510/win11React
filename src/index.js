import React, { Suspense } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import store from "./reducers";
import { Provider } from "react-redux";
import { jsx as _jsx } from "react/jsx-runtime";
const root = createRoot(document.getElementById("root"));
root.render( /*#__PURE__*/_jsx(Suspense, {
  fallback: /*#__PURE__*/_jsx("div", {
    id: "sus-fallback",
    children: /*#__PURE__*/_jsx("h1", {
      children: "Loading"
    })
  }),
  children: /*#__PURE__*/_jsx(Provider, {
    store: store,
    children: /*#__PURE__*/_jsx(App, {})
  })
}));