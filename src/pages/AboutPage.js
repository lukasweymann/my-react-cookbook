import React from "react";
import "./AboutPage.css";
import PersistenDrawerRight from "./Menu-Bar";

function AboutPage() {
  return (
    <div className="main-container_aboutpage">
      <PersistenDrawerRight />
      <div className="wrapper-aboutpage">
        <div className="headers-aboutpage">
          <h1 className="about-page__h1">ABOUT US</h1>
          <h2 className="about-page__h2">We are all about coffee. Not just the one containing caffeine, so don't be fooled by the blog's name. We love brewind, tasting and smelling coffee. We worry about quality, technique, and health issues related to coffee consumption. </h2>
          <h3 className="about-page__h3">Be sure to check the blog's links in order to learn about the aforementioned topics, find interesting products and much more. We are always looking for feedback! Be sure to email us in case you've got any suggestions to make this project better.</h3>
          <button className="aboutpage-button">EMAIL US</button>
        </div>
        <img
          className="image-coffee-aboutpage"
          src={require("../images/coffee-beans.png")}
          alt="coffe mug"
        ></img>
      </div>
    </div>
  );
}
export default AboutPage;