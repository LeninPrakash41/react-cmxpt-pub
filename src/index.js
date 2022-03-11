import React from "react";
import ReactDOM from "react-dom";
import MainPg from "./LifeCycle.jsx";

const rootElem = document.getElementById("root");

ReactDOM.render(<MainPg />, rootElem);

setTimeout(() => {
  ReactDOM.unmountComponentAtNode(rootElem);
}, 500);
