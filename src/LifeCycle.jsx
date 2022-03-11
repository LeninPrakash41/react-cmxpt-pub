/* 

Components Life Cycle

1. componentWillMount - is executed before rendering, on both for server and client side.
2. componentDidMount - after the render (first) only happend on the client side. This is where AJAX requets and DOM or state upadtes. Used for some integration with other Javascript farmeworks with the help of setTimeout or setInterval. 
3. componentWillReceiveProps - Is invoked as soon as props are updated before another render.
4. shouldComponentUpdate - true or false
5. componentWillUpdate - is called before rendering
6. componentDidUpdate - is called after some rendering
7. componentWillUnmount - is called after the compoent is unmounted from the DOM.


*/

import React from "react";

class MainPg extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: 0
    };

    this.setNewNumber = this.setNewNumber.bind(this);
  }

  setNewNumber() {
    this.setState({ data: this.state.data + 2 });
  }

  render() {
    return (
      <div>
        <button onClick={this.setNewNumber}>Counter</button>
        <ContentArea number={this.state.data}></ContentArea>
      </div>
    );
  }
}

class ContentArea extends React.Component {
  componentWillMount() {
    console.log("componentWillMount is called");
  }

  componentDidMount() {
    console.log("componentDidMount is called");
  }

  componentWillReceiveProps() {
    console.log("componentWillReceiveProps is called");
  }

  shouldComponentUpdate() {
    console.log("shouldComponentUpdate is called");
  }

  componentWillUpdate() {
    console.log("componentWillUpdate is called");
  }

  componentDidUpdate() {
    console.log("componentDidUpdate is called");
  }

  componentWillUnmount() {
    console.log("componentWillUnmount is called");
  }

  render() {
    return (
      <div>
        <h1>{this.props.number}</h1>
      </div>
    );
  }
}

export default MainPg;
