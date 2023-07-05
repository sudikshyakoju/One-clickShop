import React from "react";
import "./style.css";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="container grid2">
          <div className="box">
            <h1>One Click Store</h1>
            <p>
              Welcome to our One Click Store! We're passionate about bringing you
              the best products to express your unique style and show off your
              love for every culture. Our store features a wide range of
              products, from clothing and accessories to home decor and gifts,
              all inspired by the rich and vibrant traditions of Latin America and Nepali product.
            </p>
            <div className="icon d_flex">
              <div className="img d_flex">
                <i className="fa-brands fa-google-play"></i>
                <span>Google Play</span>
              </div>
              <div className="img d_flex">
                <i className="fa-brands fa-app-store-ios"></i>
                <span>App Store</span>
              </div>
            </div>
          </div>

          <div className="box">
            <h2>About Us</h2>
            <ul>
              <li>Careers</li>
              <li>Our Stores</li>
              <li>Our Cares</li>
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
          <div className="box">
            <h2>Customer Care</h2>
            <ul>
              <li>Help Center </li>
              <li>How to Buy </li>
              <li>Track Your Order </li>
              <li>Corporate & Bulk Purchasing </li>
              <li>Returns & Refunds </li>
            </ul>
          </div>
          <div className="box">
            <h2>Contact Us</h2>
            <ul>
              <li>Kathmandu, Nepal </li>
              <li>Email: ladistic@gmail.com</li>
              <li>Phone:+977 9861967768</li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
