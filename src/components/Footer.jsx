import React from "react";
import "../styles/Footer.css";
function Footer(props) {
  const date = new Date();
  return (
    <>
      <div className="Footer">
        <footer>
          <div className="content">
            <div className="left box">
              <div className="upper">
                <div className="topic">About us</div>
                <p></p>
              </div>
              <div className="lower">
                <div className="topic">Contact us</div>
                <div className="phone">
                  <a href="+998905675520" target={`_blank`}>
                    <i className="fas fa-phone-volume"></i>+998 90 567-55-20
                  </a>
                </div>
                <div className="email">
                  <a href="https://mail.google.com" target={`_blank`}>
                    <i className="fas fa-envelope"></i>
                    bahtiyorjonuglu31@gmail.com
                  </a>
                </div>
              </div>
            </div>
            <div className="middle box">
              <div className="topic">Our Services</div>
              <div>
                <a href="!#">Web Design, Development</a>
              </div>

              <div>
                <a href="!#">Web User Interface Design</a>
              </div>
            </div>
            <div className="right box">
              <div className="topic">Subscribe us</div>
              <form>
                <input type="text" placeholder="Enter email address" />
                <input type="submit" name="" value="Send" />
                <div className="media-icons">
                  <a href="!#">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="!#">
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a href="#!">
                    <i className="fa-brands fa-telegram"></i>
                  </a>
                  <a href="!#">
                    <i className="fab fa-youtube"></i>
                  </a>
                  <a href="!#">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </div>
              </form>
            </div>
          </div>
          <div className="bottom">
            <p>
              Copyright ©{date.getFullYear}
              <a href="!#">Market.uz</a> All rights reserved
            </p>
          </div>
        </footer>
      </div>
    </>
  );
}

export default Footer;
