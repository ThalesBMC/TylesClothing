import React,{useLayoutEffect} from "react";
import { withRouter } from "react-router-dom";
import "./menu-item.styles.scss";
import AOS from 'aos';
import 'aos/dist/aos.css';
const MenuItem = ({ title, imageUrl, size, history, linkUrl, match })=>{
  useLayoutEffect(()=>{
    AOS.init({duration : 2000}
  )},[])


  return(
  <div data-aos='fade-up' data-aos-duration="4000" data-aos-anchor-placement="top-bottom"
    className={`${size} menu-item`}
    onClick={() => history.push(`${match.url}${linkUrl}`)}
  >

    <div
      className="background-image"
      style={{ backgroundImage: `url(${imageUrl})` }}
    />
    <div className="content">
      <h1 className="title">{title.toUpperCase()}</h1>
      <span className="subtitle">SHOP NOW</span>
    </div>
  </div>
  )
}

export default withRouter(MenuItem);
