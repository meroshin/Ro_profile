import React from 'react'
import { MdOutlineMail } from "react-icons/md";
import { BsTelephone } from "react-icons/bs";
import { FaRegAddressCard } from "react-icons/fa";

function Contact() {
  return (
    <div>
         <div className="contact-page">
         <div className="contact-image">
        <img src="banner-img.jpg" alt="Contact" width="60%" />
      </div>
      <div className="contact-details">
        <div className="contact-info">
          <h2>Get In Touch</h2>
          <br/>
          <p><MdOutlineMail style={{fontSize:"2rem"}} /> me2roshinramesh@gmail.com</p>
          <p><BsTelephone  style={{fontSize:"1.8rem"}}/> +91 9037275308</p>
          <p><FaRegAddressCard style={{fontSize:"1.8rem"}} /> "Dreamvilla" Kanhirode (p.o) Koodali, Kannur, Kerala - 670592</p>
        </div>
      </div>
     
    </div>
    </div>
  )
}

export default Contact