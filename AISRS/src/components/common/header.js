import React, { Component } from "react";
import "../../css/header.css";
import logo from "../../images/intel-logo-white-100.png";

export default class Header extends Component {
  render() {
    return (
      <>
        {/* <div className="container"> */}
        <header className="header notranslate " id="header" role="banner">
          <div className="intel-blue-bar clearfix">
            <img className="intelLogo" src={logo} alt="logo" />
            <h4 className="logo-text"> Developer Zone</h4>
          </div>
          <div className="intel-banner">
            <p className="siteTitle">E2E AI SOLUTIONS RECOMMENDATION SYSTEM</p>
            {/* <p className="siteTitleDescription">
                E2E AI SOLUTIONS RECOMMENDATION SYSTEM
              </p> */}
          </div>
        </header>
        {/* </div> */}
      </>
    );
  }
}
