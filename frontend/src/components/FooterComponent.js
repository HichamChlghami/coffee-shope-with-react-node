import React from 'react';
import {Link} from 'react-router-dom'

function Footer(){
    return (
      <>
        <footer className="site-footer mt-3">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-4 col-sm-2 offset-1">
                <ul className="list-unstyled">
                  <li>
                    <Link to="/home">Home</Link>
                  </li>
                  <li>
                    <Link to="/aboutus">About Us</Link>
                  </li>
                  <li>
                    <Link to="/locationhours">Location&Hours</Link>
                  </li>
                  <li>
                    <Link to="/cart">Cart</Link>
                  </li>
                </ul>
              </div>
              <div className="col-6 col-sm-5 text-center">
                <a
                  className="btn btn-social-icon btn-instagram"
                  href="http://instagram.com/"
                >
                  <i className="fa fa-instagram fa-2x" />
                </a>{" "}
                <a
                  className="btn btn-social-icon btn-facebook"
                  href="http://www.facebook.com/"
                >
                  <i className="fa fa-facebook fa-2x" />
                </a>{" "}
                <a
                  className="btn btn-social-icon btn-twitter"
                  href="http://twitter.com/"
                >
                  <i className="fa fa-twitter fa-2x" />
                </a>{" "}
                
              </div>
              <div className="col-sm-4 text-center">
                <h5>For More Info, Contact Us!</h5>
                <a
                  role="button"
                  className="btn btn-link"
                  href="mailto:info@capitolc&ampp.com"
                >
                  <i className="fa fa-envelope-o"></i> info@capitolc&p.com
                </a>
              </div>
            </div>
          </div>
        </footer>
      </>
    );
}
export default Footer;