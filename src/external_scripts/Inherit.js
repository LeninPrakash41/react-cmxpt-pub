/*
Why Components?

SPA - 1000 lines of code. They follow only Traditional DOM structure.

Error/Mistake - Here, component based appproach
COmplex Problem => Small or Logical Group of codes

DSA - Divide and Conquer

UI - Tree Structure

Root - Starting Component
Main Components - Branches /Sub Branches


Function - COntain only a render method not any State.



*/

import React, { Component } from "react";
class MyComp extends React.Component {
  render() {
    return (
      // JSX
      <div>
        <Alpha />
        <Beta />
      </div>
    );
  }
}

class Alpha extends React.Component {
  render() {
    return (
      <div>
        <h1> Alpha Version </h1>
      </div>
    );
  }
}

class Beta extends React.Component {
  render() {
    return (
      <div>
        <h1> Beta Version </h1>
      </div>
    );
  }
}

export default MyComp;
