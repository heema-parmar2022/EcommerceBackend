import React from "react";
import "./aboutSection.css";
//import { Button, Typography, Avatar } from "@material-ui/core";
//import YouTubeIcon from "@material-ui/icons/YouTube";
//import InstagramIcon from "@material-ui/icons/Instagram";
const About = () => {
  const visitInstagram = () => {
    window.location = "https://instagram.com/meabhisingh";
  };
  return (
    <div className="aboutSection">
      <div></div>
      <div className="aboutSectionGradient"></div>
      <div className="aboutSectionContainer">
        <h1 component="h1">About Us</h1>

        <div>
          <div>
         
            <h1>Abhishek Singh</h1>
            <p>
              Visit Instagram
            </p>
            <span>
              This is a sample wesbite made by @meabhisingh. Only with the
              purpose to teach MERN Stack on the channel 6 Pack Programmer
            </span>
          </div>
          <div>
            <h1>Our Brands</h1>
            <a
              href="https://www.youtube.com/channel/UCO7afj9AUo0zV69pqEYhcjw"
              target="blank"
            >
             
            </a>

            <a href="https://instagram.com/meabhisingh" target="blank">
            
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
