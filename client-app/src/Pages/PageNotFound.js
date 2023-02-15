import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => (
  <div className="not-found container ">
    <center>
      <img
        src="https://c1.wallpaperflare.com/preview/286/573/109/error-not-found-404-lego.jpg"
        alt="not-found"
      />
      <div>
        <Link to="/" className="link-home">
          Go Home
        </Link>
      </div>
    </center>
  </div>
);

export default NotFound;
