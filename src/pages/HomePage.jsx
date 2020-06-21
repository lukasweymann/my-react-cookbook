import React from "react";
import "./HomePage.css";




function HomePage() {
  return (
    <div className="main-container_homepage">
      <nav>
        <a>HOME</a>
        <a>ABOUT</a>
        <a>SURPRISE ME!</a>
        <a>WHAT TO COOK?</a>
      </nav>
      <div className="wrapper-homepage">
        <div className="headers-homepage">
          <h1>WE LOVE CAFFEINE</h1>
          <h2>WE CERTAINLY NEED IT TO COME TO A HUMAN-LIKE STATE</h2>
        </div>
        <div className="image-container_homepage">
          <img src={require('./coffee.coffeeblog.png')} alt="coffe mug"/>
        </div>
      </div>
    </div>
  );
}
export default HomePage;
