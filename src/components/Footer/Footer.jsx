import { Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { BsGithub, BsYoutube, BsInstagram, BsLinkedin } from "react-icons/bs";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div>
        <Typography variant="h5">About Me</Typography>
        <Typography>
          Hey, my name is Saikiran Narawad. I am a Full-Stack Developer and I am
          a 4th year undergraduate student at the Indian Institute of Technology
          Kharagpur pursuing a B.Tech in chemical Engineering
        </Typography>

        <Link to="/contact" className="footerContactBtn">
          <Typography>Contact Us</Typography>
        </Link>
      </div>
      <div>
        <Typography variant="h6">Social Media</Typography>
        <a href="https://github.com/" target="black">
          <BsGithub />
        </a>
        <a href="https://youtube.com/" target="black">
          <BsYoutube />
        </a>
        <a href="https://instagram.com/" target="black">
          <BsInstagram />
        </a>
        <a href="https://www.linkedin.com/" target="black">
          <BsLinkedin />
        </a>
      </div>
    </div>
  );
};

export default Footer;
