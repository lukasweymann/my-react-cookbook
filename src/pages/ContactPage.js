import React, { useState } from "react";
import "./ContactPage.css";
import ContactForm from '../components/ContactForm';
import PersistenDrawerRight from "./Menu-Bar";
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import LocalPhoneIcon from '@material-ui/icons/LocalPhone';
import RoomIcon from '@material-ui/icons/Room';
import Button from '@material-ui/core/Button';



function ContactPage() {

const [form, setForm] = useState(false);

function handleForm(){
  setForm(true);
};
function hideForm(){
  setForm(false);
};
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
          <Button variant="outlined" onClick={handleForm}>EMAIL US</Button>
        </div>
        <img
          className="image-coffee-contactpage"
          src={require("../images/contact.png")}
          alt="coffe mug"
        ></img>
        <div className="contactform-formular">
        {form && <ContactForm 
          hideFunction={hideForm}
          />}
          </div>
        
      </div>
    </div>
  );
}
export default ContactPage;
