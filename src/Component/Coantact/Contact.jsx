import React from 'react'
import "./Contact.css"
import { BsWhatsapp , BsInstagram } from "react-icons/bs";
import { BiLogoGmail } from "react-icons/bi";
import { FaLinkedinIn } from "react-icons/fa";


const Contact = () => {
  return (
    <div className="contact" id='contact'>
        <div className="container">
            <div className="head">
                <h2>Contact</h2>
                <span></span>
            </div>
            <div className="contact-items">
                <div><BiLogoGmail className='icon-cont'/> <a href="mailto:mohamedlmouhib2002@gmail.com" target='_blank' rel="noreferrer" >mohamedlmouhib2002@gmail.com</a></div>
                <div><BsWhatsapp className='icon-cont'/> <a href="http://wa.me/+212691653247" target='_blank' rel="noreferrer" >0691-653247</a></div>
                <div><BsInstagram className='icon-cont'/> <a href="https://instagram.com/dev_globe?utm_source=qr&igshid=MzNlNGNkZWQ4Mg==" target='_blank' rel="noreferrer" >dev_globe</a></div>
                <div><FaLinkedinIn className='icon-cont'/> <a href="https://www.linkedin.com/in/mohamed-zrigou/" target='_blank' rel="noreferrer" >Mohamed Zrigou</a></div>
            </div>
        </div>
        <div className="footer">
        Created By Eng.Mohamed Zrigou
        </div>
    </div>
  )
}

export default Contact
