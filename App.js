/***
 *
 * <div id="parent">
 *          <div id="child">
 *              <h1>I'm h1 tag</h1>
 *              <h2>I'm h2 tag</h2>
 *          </div>
 *          <div id="child1">
 *              <h1>I'm h1 tag</h1>
 *              <h2>I'm h2 tag</h2>
 *          </div>
 * </div>
 *
 *
 * ReactElement(Object) => HTML(Browser Understands)
 *
 */

const heading1 = React.createElement(
  "h1",
  { id: "heading" },
  "Hello World from React !"
);
const roott = ReactDOM.createRoot(document.getElementById("root"));
// roott.render(heading1);

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I'm h1 tag"),
    React.createElement("h2", {}, "I'm h2 tag"),
  ]),
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "I'm h1 tag"),
    React.createElement("h2", {}, "I'm h2 tag"),
  ]),
]);
roott.render(parent);
