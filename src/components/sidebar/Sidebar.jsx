import React, { useState } from "react";
import "./Sidebar.css";
import Logo from "../../assets/logo.png";
import { SidebarData } from "../../data/Data";
import { LiaSignOutAltSolid } from "react-icons/lia";

const Sidebar = () => {
  const [selected, setSelected] = useState(0);
  return (
    <div className="Sidebar">
      {/* logo  */}
      <div className="logo">
        <img src={Logo} alt="" />
        {/* <span>DINESH</span> */}
      </div>
      <div>
        {/* menu  */}
        <div className="menu">
          {SidebarData.map((item, index) => {
            return (
              <div
                className={selected === index ? "menuItem active" : "menuItem"}
                key={index}
                onClick={() => setSelected(index)}
              >
                <item.icon />
                <span>{item.heading}</span>
              </div>
            );
          })}
          <div className="menuItem">
            <LiaSignOutAltSolid />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
