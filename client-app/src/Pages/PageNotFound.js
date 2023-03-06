import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
const NotFound = () => (
  <div className="not-found container ">
    <Header />
    <center>
      <img
        src="https://c1.wallpaperflare.com/preview/286/573/109/error-not-found-404-lego.jpg"
        alt="not-found"
      />
      <div>
        <Link to="/" className="link-home">
          <h1>Go Home</h1>
        </Link>
      </div>
    </center>
  </div>
);

export default NotFound;
