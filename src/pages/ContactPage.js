import React from "react";
import "./ContactPage.css";
import PersistenDrawerRight from "./Menu-Bar";
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import LocalPhoneIcon from '@material-ui/icons/LocalPhone';
import RoomIcon from '@material-ui/icons/Room';

function contactPage() {
  return (
    <div className="main-container_contactpage">
      <PersistenDrawerRight />
      <div className="wrapper-contactpage">
        <div className="headers-contactpage">
          <h1 className="headers-contactpage__h1">CONTACT US</h1>
          <p><RoomIcon style={{ color: "#fff" }} fontSize='medium' /> 25 Springview Avenue Berlin</p>
          <p><LocalPhoneIcon style={{ color: "#fff" }} />	158-695-6372</p>


          <a href="#" className="aboutpage__social-media-icon"><InstagramIcon fontSize='large' /></a>
          <a href="#" className="aboutpage__social-media-icon"><TwitterIcon fontSize='large' /></a>
          <a href="#" className="aboutpage__social-media-icon"><FacebookIcon fontSize='large' /></a>
        </div>
        <img
          className="image-coffee-contactpage"
          src={require("../images/contact.png")}
          alt="coffe mug"
        ></img>
      </div>
    </div>
  );
}
export default contactPage;
