import React from "react";
import "./HomePage.css";
import PersistenDrawerRight from "./Menu-Bar";




function HomePage() {
  return (
    <div className="main-container_homepage">
      <PersistenDrawerRight />
      <div className="wrapper-homepage">
        <div className="headers-homepage">
          <h1 className="headers-homepage__h1">WE LOVE CAFFEINE.</h1>
          <h2 className="headers-homepage__h2">We certainly need it to come to a human-like state.</h2>
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
