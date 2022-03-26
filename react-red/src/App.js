import logo from './logo.svg';
import './App.css';
import './sass.scss';

import { connect } from "react-redux"
import React from 'react'

import { startAction } from "./actions/startAction"
import { stopAction } from "./actions/stopAction"
import rotateAction from "./actions/rotateActions"

// function App(props){ // props, instead of this.props;   props.rotating}
class App extends React.Component{
render(){
  return (
    console.log(this.props),
    <div className="App">
      <header className="App-header">
        <img 
        src={logo}
        className= { "App-logo" +
        (this.props.rotating ? "":" App-logo-paused")} alt="logo" 
        onClick = { ()=>
          //this.props.rotating ? this.props.stopAction : this.props.startAction
          //this.props.rotating ? console.log(this.props.stopAction) : console.log(this.props.startAction)  
          this.props.rotateAction(!this.props.rotating)  
        }
          />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <button>
          Learn React
        </button>
      </header>
    </div>
  );
}
 }

const mapStateToProps = state => ({
    ...state //all states
});

/* const mapDispatchToProps = dispatch => {
console.log(startAction, stopAction)
return {
startAction: () => dispatch(startAction),
stopAction: () => dispatch(stopAction)
  }
};
  */
const mapDispatchToProps = dispatch => ({
/*   startAction: () => dispatch(startAction),
  stopAction: () => dispatch(stopAction) */
  rotateAction: (payload) => dispatch(rotateAction(payload))
}); 



export default connect(mapStateToProps, mapDispatchToProps)(App);
