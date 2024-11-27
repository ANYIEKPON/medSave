import React, { useEffect, useState } from "react";
import { RiMenu3Fill } from "react-icons/ri";
import { IoMdContact, IoMdClose, IoIosLogOut } from "react-icons/io";
import "./navbar.scss";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const [showSide, setShowSide] = useState(true);

  const windowWidth = window.screen.width;
  console.log(windowWidth);

  const openMenu = () => {
    setMenu((prev) => !prev);
  };

  const responsive = () => {
    if (windowWidth > 981) {
      setShowSide(false);
    } else {
      setShowSide(true);
    }
  };

  useEffect(() => {
    window.addEventListener("load", responsive);
    window.addEventListener("resize", responsive);
  }, []);

  useEffect(() => {
    if (windowWidth > 981) {
      setShowSide(false);
    } else {
      setShowSide(true);
    }
  }, [windowWidth]);

  return (
    <div className="navbar">
      <div className="container">
        <div className="leftSide">
          <p>MedSave</p>
        </div>
        <div className="rightSide">
          <div className="menuIcon" onClick={openMenu}>
            <RiMenu3Fill size={25} />
          </div>

          <div className="menu">
            <ul>
              <li>Home</li>
              <li>Find a Doctor</li>
              <li>About us</li>
            </ul>
            <button>Client zone</button>
          </div>

          <div className={menu ? "navMenu" : "noMenu"}>
            <div className="subMenu">
              <ul>
                <li>Home</li>
                <li>Find a Doctor</li>
                <li>About us</li>
              </ul>
              <button>Client zone</button>
            </div>
            <div onClick={openMenu} className="close">
              <IoMdClose />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
