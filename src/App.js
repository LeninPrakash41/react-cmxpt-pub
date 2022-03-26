/*

Building a Chart using Material UI and DevExpress


Dev Express - Package is used to control and build teh UI for any platform
Charts - Pie Chart, slices to illustrate a numerical proportions or representations


1. create react app
2. go to the directory
3. Install dependency -  npm i --save @devexpress/dx-react-core @devexpress/dx-react-chart
4. npm install --save @devexpress/dx-react-chart-material-ui
4. install @material-ui/core
5. npm start

*/
/* 

import React from 'react'
import Paper from '@material-ui/core/Paper'
import {
  Chart,
  PieSeries,
  Title,
} from "@devexpress/dx-react-chart-material-ui"


const App = () => {

  // Data can be loaded in Array as an Object

  const jsonData = [
    {
      arg: 'Jan', value: 100
    },
    {
      arg: 'Feb', value: 80
    },
    {
      arg: 'Mar', value: 10
    },
    {
      arg: 'Apr', value: 20
    },
    {
      arg: 'May', value: 30
    },
    {
      arg: 'Jun', value: 50
    },
    {
      arg: 'Jul', value: 45
    },
  ]

  return (
    <Paper>
      <Chart data={jsonData}>
        <PieSeries valueField='value' argumentField='arg' />
        <Title text="Statistical Report" />
      </Chart>
    </Paper>
  )
}


export default App */

/* 

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import BlogPost from "./pages/Blog";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BlogPost />}>
          <Route index element={Home} />
          <Route path="/about" element={About } />
          <Route path="/blog" element={Blog} />
          <Route path="/contact" element={Contact} />
        </Route>
      </Routes>
    </BrowserRouter>
    
  );
}

export default App; */

import React , {useReducer} from "react"

const initialState = [
  {
      id: 1,
      title: "TASK TITLE",
      closed: false,
  },
  {
      id: 2,
      title: "TASK TITLE",
      closed: false,
  }
];


const reducer = (state, action) => {
  switch (action.type) {
      case "CLOSED":
          return state.map((taskBoard) =>{
              if(taskBoard.id === action.id){
                  return {...taskBoard, closed: !taskBoard.closed}
              }
              else{
                  return taskBoard
              }
            });
      default:
          return state;
  }
};


function Tasks(){
const [tasks, dispatch] = useReducer( reducer, initialState)
const handleTask = (taskBoard) =>{
  dispatch({type: "CLOSED", id: taskBoard.id});
}

return (
<>
{tasks.map((taskBoard) => (
  <div key={taskBoard.id}>
  <input 
  type="checkbox"
  checked = {taskBoard.closed} 
  onChange = {() => handleTask(taskBoard) }
  />
  {taskBoard.id} {taskBoard.title} <br/>
  </div>
)
)}
</>
)

}

export default Tasks;