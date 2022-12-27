import React from "react";
import { Link } from "react-scroll";
import "./NavBar.css";
import { AiFillHome } from "react-icons/ai";
import { BsFillPersonFill } from "react-icons/bs";
import { MdWork, MdDesignServices } from "react-icons/md";
import { FaHandshake } from "react-icons/fa";
function NavBar() {
  return (
    <div>
      <nav className="navBar__container">
        <Link
          className="navBar__link"
          to="home"
          spy={true}
          smooth={true}
          duration={800}
          activeClassName="active"
        >
          <AiFillHome className="navBar__icon" />
          <span className="navBar__text">HOME</span>
        </Link>

        <Link
          className="navBar__link"
          to="about"
          spy={true}
          smooth={true}
          duration={800}
          activeClassName="active"
        >
          <BsFillPersonFill className="navBar__icon" />
          <span className="navBar__text">ABOUT</span>
        </Link>

        <Link
          className="navBar__link"
          to="skills"
          spy={true}
          smooth={true}
          duration={800}
          activeClassName="active"
        >
          <MdDesignServices className="navBar__icon" />
          <span className="navBar__text">SKILLS</span>
        </Link>

        <Link
          className="navBar__link"
          to="works"
          spy={true}
          smooth={true}
          offset={50}
          duration={800}
          activeClassName="active"
        >
          <MdWork className="navBar__icon" />
          <span className="navBar__text">WORKS</span>
        </Link>
        {/* <Link
          className="navBar__link"
          to="contact"
          spy={true}
          smooth={true}
          duration={500}
          activeClassName="active"
        >
          <FaHandshake className="navBar__icon" />
          <span className="navBar__text">CONTACT</span>
        </Link> */}
      </nav>
    </div>
  );
}

export default NavBar;
