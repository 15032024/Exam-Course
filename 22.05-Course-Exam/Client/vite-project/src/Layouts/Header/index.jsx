import React from "react";
import { NavLink } from "react-router-dom";
import HomePage from "../../Pages/HomePage";
import { MdPhoneInTalk } from "react-icons/md";
import "./index.scss";
const Header = () => {
  return (
    <header>
      <div  className="container">
        <div className="course">
          <div className="course-logo">
            <img
              src="https://preview.colorlib.com/theme/course/images/logo.png"
              alt=""
            />
          </div>
          <div className="course-nav">
            <nav>
              <ul>
                <li>
                  <NavLink to="/"> Home </NavLink>
                </li>
                <li>
                  <NavLink> About Us </NavLink>
                </li>
                <li>
                  <NavLink> Courses </NavLink>
                </li>
                <li>
                  <NavLink> Element </NavLink>
                </li>
                <li>
                  <NavLink> News </NavLink>
                </li>
                <li>
                  <NavLink to="/addPage"> AddPage </NavLink>
                </li>
              </ul>
            </nav>
          </div>
          <div className="course-contact">
            <MdPhoneInTalk /> +43 4566 7788 2457
          </div>
        </div>
      </div>
   
    </header>
  );
};

export default Header;
