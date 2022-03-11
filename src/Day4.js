import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';

import App from './App';

const logoImg = 'https://www.macincode.com/assets/img/logo.png';

const headerStyles = {
  color: '#000000',
  backgroundColor: '#eeeeee',
  padding: 20,
  lineHeight: 1.5,
  fontSize: 14,
};

const Institute = 'Sathyabama';
const Course = 'ReactJS';
const preReq = 'JavaScript';
const status = {
  //Key or Name : "Value" => Object or JSON or Dictionary
  tutor_name: 'Lenin Prakash',
  students_year: 'III Year',
};
const date = 'Mar 07, 2022';

const header = (
  <header style={headerStyles}>
    <h1>{Institute}</h1>
    <h2>{Course}</h2>
    <h3>{preReq}</h3>
    <p>
      status: {status.tutor_name} {status.students_year}
    </p>

    <small>Date: {date}</small>
  </header>
);

//JSX Element Main Section

const bodyStyles = {
  backgroundColor: '#61DBDB',
};

const main = (
  <main style={bodyStyles}>
    <p> How to Start</p>
    <ul>
      <li>HTML </li>
      <li>CSS </li>
      <li>JAVASCRIPT </li>
      <li>REACT </li>
    </ul>
    <div>
      <img class="logo" src={logoImg} alt="Logo Image" />
    </div>
  </main>
);

//JSX Element Footer Section

const footerStyles = {
  backgroundColor: '#61DBFB',
};

const footer = (
  <footer styles={footerStyles}>
    <p> Copyright @ 2022 </p>
  </footer>
);

const app = (
  <div className="app">
    {header}
    {main}
    {footer}
  </div>
);

/* const title =<h2>Start</h2>   
const jsx = <h1>Sathyabama</h1> */
//document.getElementsByClassName();

const rootElem = document.getElementById('root');

// TO DIsplay some data (rendered data) in a browser should need some place. We have to paste or write the data. That sapce cannot be multiple. Instead, just write a root place (address), where we can render all the data written inside our react code.

ReactDOM.render(app, rootElem);

// We can add styles to our app eitehr using inline css, external css, internal.

// Data Binding to JSX Elements
// const variable_name = ""
//{variable_name}  1;
