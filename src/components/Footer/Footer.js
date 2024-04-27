import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import {
  faHouse,
  faEnvelope,
  faPhoneVolume,

} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram,faLinkedin,faXTwitter } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <div className="Footer">
      <div className="about-section">
        <h3>About LiftEase</h3>
        <p>
          Culpa duis exercitation aliquip aliquip amet. Proident reprehenderit
          excepteur occaecat id ea fugiat elit pariatur laborum duis proident.
          Reprehenderit incididunt exercitation non amet laboris aute.{" "}
        </p>
        <div className="socials">
        <div className='horizontal'></div>
          <FontAwesomeIcon icon={faLinkedin} style={{ color: "#ffffff" ,height:'25px'}} />
          <FontAwesomeIcon icon={faXTwitter} style={{ color: "#ffffff" ,height:'25px'}} />
          <FontAwesomeIcon icon={faInstagram} style={{ color: "#ffffff" ,height:'25px'}} />
          <div className='horizontal'></div>
        </div>
      </div>
      <h2 id="logo">LOGO</h2>
      
      <div className="contactus-section">
        <h3>Contact Us</h3>
        <nav>
          <ul>
            <li>
              <FontAwesomeIcon icon={faHouse} style={{ color: "#ffffff" }} />
              New York,NY 2333, US
            </li>
            <li>
              <FontAwesomeIcon icon={faEnvelope} style={{ color: "#ffffff" }} />
              ravirt7911@gmail.com
            </li>
            <li>
              <FontAwesomeIcon
                icon={faPhoneVolume}
                style={{ color: "#ffffff" }}
              />
              +91 8917362829
            </li>
          </ul>
        </nav>
        <div className="services-section">
        <h3>Services</h3>
        <nav>
          <ul>
            <li>
              <Link to="/getRide">Get Lift</Link>
            </li>
            <li>
              <Link to="/giveRide">Give Lift</Link>
            </li>
          </ul>
        </nav>
      </div>
      </div>
    </div>
  );
}