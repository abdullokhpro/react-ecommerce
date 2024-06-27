import React from "react";
import { RiFacebookFill } from "react-icons/ri";
import { FaTwitter } from "react-icons/fa";
import "./footer.scss";
import logo from "../../../assets/home/logo.svg";
import { FOOTER_DATA } from "../../../static";

const Footer = () => {
  const footerData = FOOTER_DATA?.map((link) => (
    <div className="footir_well" key={link.id}>
      <h4>{link.h1}</h4>
      <ul>
        {link?.links?.map((link, inx) => (
          <li key={inx}>
            <a href="">{link}</a>
          </li>
        ))}
      </ul>
    </div>
  ));

  return (
    <div>
      <footer className="footer">
        <div className="container">
          <div className="footer__all">
            <div className="footer__row">
              <img src={logo} alt="" />
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever.Since the 1500s, when an unknown printer.
              </p>
            </div>

            <div className="footer__row">
              <h4>Follow Us</h4>
              <h5>
                Since the 1500s, when an unknown printer took a galley of type
                and scrambled.
              </h5>
              <div className="icons">
                <RiFacebookFill />
                <FaTwitter />
              </div>
            </div>
            <div className="footer__row">
              <h4>Contact Us</h4>
              <h4>E-Comm , 4578 Marmora Road, Glasgow D04 89GR</h4>
            </div>
          </div>
          <div className="footer__alt">{footerData}</div>
          <div className="footer__bottom">
            <div className="footer__bottom_lift">
              <p>© 2018 Ecommerce theme by www.bisenbaev.com</p>
            </div>
            <div className="footer__bottom_lift"></div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
