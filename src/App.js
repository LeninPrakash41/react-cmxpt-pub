import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";

function App() {
  return (
    // <Router>
    //   <Navbar />

    //   <Switch>
    //     <Route exact path="/" component={Home} />
    //     <Route path="/About" component={About} />
    //     <Route path="/Contact" component={Contact} />
    //     <Route path="/Blog" component={Blog} />
    //   </Switch>
    // </Router>

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="blog" element={<Blog />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
