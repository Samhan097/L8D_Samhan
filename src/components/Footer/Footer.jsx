/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const Footer = ({
  className,
  frame = "https://cdn.animaapp.com/projects/655b5c17f4acb9cb5701b449/releases/655b5d14270a8adb1f01a784/img/frame-313.svg",
}) => {
  return (
    <div className={`footer ${className}`}>
      <img
        className="line-3"
        alt="Line"
        src="https://cdn.animaapp.com/projects/655b5c17f4acb9cb5701b449/releases/655b5d14270a8adb1f01a784/img/line-31.svg"
      />
      <div className="group-9">
        <div className="text-wrapper-6">Level8Digital</div>
        <div className="text-wrapper-7">®</div>
      </div>
      <div className="text-wrapper-8">Discover</div>
      <div className="text-wrapper-9">Find Us On</div>
      <p className="text-wrapper-10">
        Interested in keeping up-to-date about the latest in design trends in Manchester, England? We’ve got you
        covered.
      </p>
      <p className="work-services-about">
        Work <br />
        Services <br />
        About <br />
        Blog Archive
        <br />
        Contact Us
      </p>
      <div className="facebook-instagram">
        Facebook
        <br />
        Instagram
        <br />
        Youtube
        <br />
        LinkedIn
        <br />
        Twitter
      </div>
      <p className="text-wrapper-11">
        By subscribing to our newsletter you agree to our privacy policy and will get commercial communication.
      </p>
      <p className="text-wrapper-12">Copyright ©2022 level8digital.com. All rights reserved.</p>
      <div className="overlap-group-wrapper">
        <div className="overlap-group">
          <div className="text-wrapper-13">Enter Email Address Here</div>
          <img
            className="vector-3"
            alt="Vector"
            src="https://cdn.animaapp.com/projects/655b5c17f4acb9cb5701b449/releases/655b5d14270a8adb1f01a784/img/vector.svg"
          />
        </div>
      </div>
      <img className="frame-2" alt="Frame" src={frame} />
      <div className="group-10">
        <div className="group-11">
          <div className="text-wrapper-14">Technologies We Use</div>
          <img
            className="group-12"
            alt="Group"
            src="https://cdn.animaapp.com/projects/655b5c17f4acb9cb5701b449/releases/655b5d14270a8adb1f01a784/img/group-313.png"
          />
        </div>
        <div className="frame-3">
          <p className="text-wrapper-15">Schedule A Free Discovery Session</p>
          <img
            className="subtract-2"
            alt="Subtract"
            src="https://cdn.animaapp.com/projects/655b5c17f4acb9cb5701b449/releases/655b5d14270a8adb1f01a784/img/subtract.svg"
          />
        </div>
      </div>
    </div>
  );
};

Footer.propTypes = {
  frame: PropTypes.string,
};
