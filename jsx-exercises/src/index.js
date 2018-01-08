import React from "react";
import ReactDOM from "react-dom";

// function Example() {
//   return (
//     React.createElement("span", {}, "Hello Thing")
//   )
// }

function Example() {
  return React.createElement(
    "div",
    { className: "book" },
    React.createElement("div", { className: "title" }, "The Title"),
    React.createElement("div", { className: "author" }, "The Author"),
    React.createElement(
      "ul",
      { className: "stats" },
      React.createElement("li", { className: "rating" }, "5 stars"),
      React.createElement("li", { className: "isbn" }, "12-345678-910")
    )
  );
}

function Greeting() {
  // Try all of these variations:
  // var username = "root";
  // var username = undefined;
  // var username = null;
  // var username = "Joe";
  // var username = false;
  var username = true;

  return (
    <span>
      {typeof username === "string"
        ? "Hello " + username
        : "Not Logged In"}
      </span>
  )
}

ReactDOM.render(<Greeting />, document.getElementById("root"));
