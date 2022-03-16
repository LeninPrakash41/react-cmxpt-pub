// Layout Component - <Outlet>, <Link>

// Outlet is used to renders the current route which are selected byt the user

// Link is used to set the URL and keep track of navigation or history.

// In HTML => <a href = "https://www.google.com" > </a>

// Layout component is a shared component wehich will inserts common design or contents on all pages, like Navigation or Side Menu Navigation

import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            {" "}
            <Link to="/">Home</Link>
          </li>
          <li>
            {" "}
            <Link to="/about">About</Link>
          </li>
          <li>
            {" "}
            <Link to="/blog">Blog</Link>
          </li>
          <li>
            {" "}
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            {" "}
            <Link to="/NF">404 Page</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </div>
  );
};

export default Layout;
