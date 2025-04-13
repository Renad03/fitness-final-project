import React from "react";
import { 
    FaFacebook, FaInstagram, FaYoutube, 
    FaMapMarkerAlt, FaPhone, FaEnvelope 
} from "react-icons/fa";
import { SiX } from "react-icons/si";
import './Footer.module.css';

const Footer = () => {
  return (
    <footer className="footer text-light py-5">
      <div className="container">
        <div className="row">
          {/* Left Section */}
          <div className="col-md-4 mb-4">
            <div className="d-flex align-items-center mb-2">
              <div className="logo-box me-2"></div>
              <h4 className="mb-0">Fit<span className="text-danger">Maker</span></h4>
            </div>
            <p className="text-light">Transform Your Body</p>
            <p  className="text-light">
              Transform Your Body with FitMaker, Your Trusted Partner in Fitness. With Over 
              <span className="text-danger"> 5 Years </span>
              of Experience, We Offer Expert Coaching, Tailored Workout Plans, and Comprehensive Nutritional Guidance. 
              <span className="text-warning"> Join Our Community </span> and Start Your Journey Towards a Healthier, Stronger You.
            </p>
            <div className="d-flex gap-3 mt-3 fs-5">
              <FaFacebook />
              <FaInstagram />
              <SiX />
              <FaYoutube />
            </div>
          </div>

          {/* Company */}
          <div className="col-md-2 mb-4">
            <h6 className="text-danger mb-3">Company</h6>
            <ul className="list-unstyled text-muted small">
              <li className="text-light">About Us</li>
              <li className="text-light">Our Services</li>
              <li className="text-light">Careers</li>
              <li className="text-light">Blog</li>
              <li className="text-light">Testimonial</li>
              <li className="text-light">Contact Us</li>
            </ul>
          </div>

          {/* Resources */}
          <div className="col-md-2 mb-4">
            <h6 className="text-danger mb-3">Resources</h6>
            <ul className="list-unstyled text-muted small">
              <li className="text-light">Fitness Tools</li>
              <li className="text-light">Workout Videos</li>
              <li className="text-light">Nutrition Guides</li>
              <li className="text-light">FAQ</li>
              <li className="text-light">Success Stories</li>
              <li className="text-light">Membership</li>
            </ul>
          </div>

          {/* Programs */}
          <div className="col-md-2 mb-4">
            <h6 className="text-danger mb-3">Programs</h6>
            <ul className="list-unstyled text-muted small">
              <li className="text-light">Weight Loss</li>
              <li className="text-light">Building Muscles</li>
              <li className="text-light">Home Workout</li>
              <li className="text-light">Gym Plan</li>
              <li className="text-light">Our Plans</li>
              <li className="text-light">Fitness Group</li>
            </ul>
          </div>

          {/* Contact */}
          <div className="col-md-2 mb-4">
            <h6 className="text-warning mb-3">Contact Us</h6>
            <ul className="list-unstyled text-muted small">
              <li className="text-light"><FaMapMarkerAlt className="me-2" /> USA - Washington DC</li>
              <li className="text-light"><FaPhone className="me-2" /> 1234-56789</li>
              <li className="text-light"><FaEnvelope className="me-2" /> Fitmakerrr@Gmail.Com</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
