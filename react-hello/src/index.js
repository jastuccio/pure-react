import React from "react";
import ReactDOM from "react-dom";

function HelloReact() {
  return (
    <div>
      <Hello/> <R/>!
    </div>
  );
}

const Hello = () => ( <span>Hello</span> );
const R = () => ( <span>React</span> );

ReactDOM.render(<HelloReact />, document.querySelector("#root"));
