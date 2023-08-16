import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div class="footer-clean">
      <footer>
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-3 item social">
              <a href="https://www.facebook.com/ayush.aryan.90834/">
                <i class="bi bi-facebook"></i>
              </a>
              <a href="https://www.linkedin.com/in/ayush-aryan-8305861a2/">
                <i class="bi bi-linkedin"></i>
              </a>
              <a href="https://github.com/aryanayush012">
                <i class="bi bi-github"></i>
              </a>
              <p class="copyright text-light">
                All Rights Reserved ©️ Ayush Aryan
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
