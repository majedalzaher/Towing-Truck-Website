import React from "react";

export const Contact = (props) => {
  return (
      <div>
        <div id="contact">
          <div className="container">
            <div className="section-title text-center">
              <h2>Get In Touch</h2>
              <p>Contact us through the information below or connect with us on social media.</p>
            </div>
            <div className="row contact-content">
              {/* Contact Info */}
              <div className="col-md-6 contact-info">
                <div className="contact-item">
                  <h3>Contact Info</h3>
                  <p>
                  <span>
                    <i className="fa fa-map-marker"></i> Address:
                  </span>{" "}
                    {props.data ? props.data.address : "loading"}
                  </p>
                  <p>
                  <span>
                    <i className="fa fa-phone"></i> Phone:
                  </span>{" "}
                    {props.data ? props.data.phone : "loading"}
                  </p>
                </div>
              </div>
              {/* Social Media Links */}
              <div className="col-md-6 social-media">
                <h3>Connect With Us</h3>
                <ul className="social-links">
                  <li>
                    <a href={props.data ? props.data.facebook : "/"}>
                      <i className="fa fa-facebook"></i> Facebook
                    </a>
                  </li>
                  <li>
                    <a href={props.data ? props.data.tictok : "/"}>
                      <i className="fa fa-play-circle"></i> TikTok
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* Footer */}
          <div id="footer" className="text-center">
            <p> Need emergency towing? We're here to help 24/7. Contact us now for fast and reliable service.</p>
          </div>
        </div>
      </div>
  );
};
