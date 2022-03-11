/* 
Props - Properties in Javascript => HTML based 

Properties in Javascript => HTML/JSX

Components in React can pass as props

Props are like a functional arguments, (arg1, arg2,...argn)

Syntax
function Comp(props){
  return <h1>{props.age}</h1>
}

ReactDOM.render ( <Comp age=30 />, rootELem)

Compoents with Another Components
Props will also work with multiple components - pass data from one Comp to another Comp as a parameter


*/

import React from "react";
import ReactDOM from "react-dom";

function Comp(props) {
  return <p>{props.year}</p>;
}

function Schedule() {
  //pass the variable to component
  const Newyear = "2022";
  return (
    <>
      <h1>What is the Year now?</h1>
      <Comp year="2021" />
      <Comp year={Newyear} />
    </>
  );
}

const rootElem = document.getElementById("root");
ReactDOM.render(<Schedule />, rootElem);
