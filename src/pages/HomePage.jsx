import React from "react";
import "./HomePage.css";
import PersistenDrawerRight from "./Menu-Bar";

function HomePage() {
  return (
    <div className="main-container_homepage">
      <PersistenDrawerRight />
      <div className="wrapper-homepage">
        <div className="headers-homepage">
          <h1>WE LOVE CAFFEINE</h1>
          <h2>WE CERTAINLY NEED IT TO COME TO A HUMAN-LIKE STATE</h2>
        </div>
        <img
          className="image-coffee-homepage"
          src={require("../images/coffee_nobackground.png")}
          alt="coffe mug"
        ></img>
      </div>
    </div>
  );
}
export default HomePage;
