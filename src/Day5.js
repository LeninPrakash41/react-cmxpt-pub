/*  
Components - Aggregation of Components.
1. header 
2. Main body
3. SideMenu (Optional)
4. Footer

Function - Functional Components (Presentational Components/Stateless Components)
Class - Class-Based (Container Components / Statefull Components/ Smart Components)

JSX Element to Components

Components in React are JavaScript functions or classes, then it will return a JSX.
1. Name must start with Uppercase
2. Name should be two words
3. CamelCase

Create Components:
Header
Footer
Body - Multiple Components like User details, Description Section
When we use different colors, each color represents different Components.

Javascript Function

- Regular or an Arrow Function

const getUser = (fName, lName, place, age, skills) => {
  return `${fName} ${lName} ${place} ${age} ${skills.join('.,-,_')}`
}

const skills = ['HTML', 'CSS', 'JS', 'React']
console.log(getUser('Lenin', 'Prakash', 'Chennai', 30, skills ))


      class Parent{
          constructor(fName, lName, place, age){
              this.fName = fName
              this.lName = lName
              this.place = place
              this.age = age
          }

          getUser(){
              return `${this.fName} ${this.lName} ${this.place} ${this.age} `
          }

          parentMethod(){

          }
      }
      
      //Initiate Object Instance using new keyword

      const par_obj = new Parent("Lenin", "Prakash", "Chennai", 30)
      console.log(par_obj)

      class Child extends Parent{
          constructor(fName, lName, place, age, skills){
            super(fName, lName, place, age)
            this.skills = skills
          }

          getSkills() {
              let len = this.skills.length
              return len > 0 ? this.skills.join(',') : 'No Extra Skills ' // Conditional               
          }

          childMethod(){

          }
      }

      //const skills = ["HTML", "CSS", "JS", "React"];

      const child_obj = new Child("Lenin", "Prakash", "Chennai", 30, skills)
      console.log(child_obj)

      // React Component using Javascript Function
const jsx = <tag>paragraph</tag>
const ComponentName = () => {
  return jsx
}

//JSX Header Element

const header = (
  <header style={headerStyles}>
    <h1>Sathyabama</h1>
    <h2>React</h2>
    <h3>JavaScript</h3>
  </header>
);

// React Components

const Header = () => {
  return header 
}

const Header = () => {
  return (
    <header style={headerStyles}>
    <h1>Sathyabama</h1>
    <h2>React</h2>
    <h3>JavaScript</h3>
    </header>
  )
}

*/

import React from "react";
import ReactDOM from "react-dom";

const hexaColor = () => {
  let str = "0123456789abcdef";
  let color = "";
  for (let i = 0; i < 6; i++) {
    let index = Math.floor(Math.random() * str.length);
    color += str[index];
  }
  return "#" + color;
};

const HexaColor = () => {
  const bgColor = hexaColor();
  const styles = {
    height: "50px",
    display: "flex",
    backgroundColor: "green",
    "justify-content": "center",
    "align-items": "center",
    fontFamily: "Montserrat",
    margin: "2px auto",
    borderRadius: "5px",
    width: "40%",
    border: "1px solid grey"
  };
  return (
    <div style={styles}>
      <h2>{bgColor}</h2>
    </div>
  );
};

// Header Component
const Header = () => (
  <header>
    <div className="header-wrapper">
      <h1>Welcome Sathyabama</h1>
      <h2>Course Name: React</h2>
      <h3>Pre-Requisite: JavaScript</h3>
      <p>Lenin</p>
      <small>March 3, 2022</small>
    </div>
  </header>
);

// User Card Component
const UserCard = () => (
  <div className="user-card">
    <h2>Lenin</h2>
  </div>
);

// TechList Component
const TechList = () => {
  const technologies = ["HTML", "CSS", "JavaScript", "ReactJS"];
  const technologiesMapped = technologies.map((tech) => (
    <li key={tech}>{tech}</li>
  ));
  return technologiesMapped;
};

// Main Component
const Main = () => (
  <main>
    <div className="main-wrapper">
      <p>Prerequisite to get started react.js:</p>
      <ul>
        <TechList />
      </ul>
      <UserCard />
      <div>
        {/* Generate two different hexa colors every time */}
        <HexaColor />
        <HexaColor />
      </div>
    </div>
  </main>
);

// Footer Component
const Footer = () => (
  <footer>
    <div className="footer-wrapper">
      <p>Copyright Algofusion</p>
    </div>
  </footer>
);

// The App, or the parent or the container component
const App = () => (
  <div className="app">
    <Header />
    <Main />
    <Footer />
  </div>
);

const rootElement = document.getElementById("root");
// we render the App component using the ReactDOM package
ReactDOM.render(<App />, rootElement);
