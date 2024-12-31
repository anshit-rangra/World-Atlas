import React from 'react'
import footerContact from '../../api/footerApi.json'
import { IoCallSharp } from "react-icons/io5";
import { MdPlace } from "react-icons/md";
import { TbMailPlus } from "react-icons/tb";
import { NavLink } from "react-router-dom";

const Footer = () => {

  const footerIcon = {
    MdPlace: <MdPlace />,
    IoCallSharp: <IoCallSharp />,
    TbMailPlus: <TbMailPlus />,
  }

  return (
    <footer className='footer-section'>
      <div className="container grid grid-three-cols">
        {
          footerContact.map((curData, index) => {
            const { icon, title, details } = curData
            return (
              <div className="footer-contact" key={index}>
                <div className="icon">{footerIcon[icon]}</div>
                <div className="footer-contact-text">
                  <p>{title}</p>
                  <p>{details}</p>
                </div>
              </div>
            )
          })
        }
      </div>

      <div className="copyright-area">
        <div className="container">
          <div className="grid grid-two-cols">
            <div className="copyright-text">
              <p>
                Copyright &copy; 2024, All Right Reserved
                <NavLink to="https://www.instagram.com/anshit.rangra?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank">
                  Anshit Rangra
                </NavLink>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
