import React from "react";
import {
  FaLinkedinIn,
  FaTwitter,
  FaGithub,
  FaInstagram,
  FaHeart,
} from "react-icons/fa";
import "./footer.css";

function Footer() {
  return (
    <div>
      <footer className="footer">
        <div>
          <p>Connect with me</p>
          <ul className="social-media-icons">
            <li>
              <a
                href="https://www.linkedin.com/in/adarsh-patel-449a55175/"
                target={"_blank"}
                rel="noreferrer"
              >
                <FaLinkedinIn className="grid" />
              </a>
            </li>

            <li>
              <a href="https://github.com/Adarsh-Patel-Dev">
                <FaGithub className="grid" />
              </a>
            </li>

            <li>
              <a
                href="https://twitter.com/AdarshPatelDev"
                target={"_blank"}
                rel="noreferrer"
              >
                <FaTwitter className="grid" />
              </a>
            </li>
          </ul>
          <span>
            Made with <FaHeart /> by Adarsh
          </span>
        </div>
      </footer>
    </div>
  );
}

export { Footer };
