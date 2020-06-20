import React from "react";
import "./HomePage.css";

function HomePage() {
  return (
    <div className="main-container_homepage">
      <nav>
        <a>HOME</a>
        <a>ABOUT</a>
        <a>SURPRISE ME!</a>
        <a>PLACES</a>
        <a>COFFEE AND SLEEP</a>
        <a>ESSENTIALS</a>
        <a>HOW TO BREW</a>
      </nav>
      <div className="wrapper-homepage">
        <div className="headers-homepage">
          <h1>WE LOVE CAFFEINE</h1>
          <h2>WE CERTAINLY NEED IT TO COME TO A HUMAN-LIKE STATE</h2>
        </div>
          <img className="image-coffee-homepage" src={require('../images/coffee_nobackground.png')} alt="coffe mug"></img>
      </div>
    </div>
  );
}
export default HomePage;
