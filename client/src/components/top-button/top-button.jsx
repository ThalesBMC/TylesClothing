import React from "react";
import "./top-button.scss";
import logo from "./top-button-image.png";

const TopButton = ({ position }) => {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className="bottom" onClick={() => scrollToTop()}>
      <img src={logo} alt="top button" />
    </div>
  );
};
export default TopButton;
