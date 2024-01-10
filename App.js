import React from "react";
import ReactDOM from "react-dom/client";

const heading1 = React.createElement(
  "h1",
  { id: "heading" },
  "Hello World from React !"
);
const roott = ReactDOM.createRoot(document.getElementById("root"));
// roott.render(heading1);

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "This is tag 1"),
    React.createElement("h2", {}, "This is tag 2"),
  ]),
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "This is tag 3"),
    React.createElement("h2", {}, "This is tag 4"),
  ]),
]);
roott.render(parent);
