import React, { Component } from "react";
import ReactDOM from "react-dom";

//functional components
class App extends Component {
  state = {
    fName: "",
    lName: "",
    message: "",
    key: ""
  };

  handleClick = (ev) => {
    // ev gives an event object with reference
    console.log(ev);

    this.setState({
      message: "Hi User!"
    });
  };

  // Trigger whenever the user moves the mouse
  handleMove = (ev) => {
    // ev gives an event object with reference
    console.log(ev);
    this.setState({
      message: "Mouse is moving from user end!"
    });
  };

  handleCopy = (ev) => {
    // ev gives an event object with reference
    console.log(ev);
    this.setState({
      message: "Copy content is strictly disabled!"
    });
  };

  handleKeyPress = (ev) => {
    // ev gives an event object with reference
    console.log(ev);
    this.setState({
      message: "${ev.target.value} is pressed and the keycode is " + ev.charCode
    });
  };

  handleBlur = (ev) => {
    // ev gives an event object with reference
    console.log(ev);
    this.setState({
      message: "Input field is blurred!"
    });
  };

  handleChange = (ev) => {
    this.setState({
      fName: ev.target.value,
      message: ev.target.value
    });
  };

  render() {
    return (
      <div>
        <h1> Event Handling </h1>

        <button onClick={this.handleClick}>Click Me </button>
        <br />
        <button onMouseMove={this.handleMove}> Mouse Movement </button>

        <p onCopy={this.handleCopy}> Copy the content from the paragragh </p>
        <p>{this.state.message}</p>

        <label htmlFor=""> OnKey Press Event</label>
        <input type="text" onKeyPress={this.handleKeyPress} />
        <br />
        <br />

        <label htmlFor=""> OnBlur Event</label>
        <input type="text" onBlur={this.handleBlur} />
        <br />
        <br />

        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="fName"> First Name: </label>
            <input
              onChange={this.handleChange}
              name="fName"
              value={this.state.value}
            />
            <br />
          </div>

          <div>
            <input type="submit" value="Submit" />
          </div>
        </form>
      </div>
    );
  }
}

const rootElem = document.getElementById("root");

ReactDOM.render(<App />, rootElem);
