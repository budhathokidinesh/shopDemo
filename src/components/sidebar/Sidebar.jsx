import React, { useState } from "react";
import "./Sidebar.css";
import Logo from "../../assets/logo.png";
import { SidebarData } from "../../data/Data";
import { LiaSignOutAltSolid } from "react-icons/lia";
import { FaBars } from "react-icons/fa";
import { motion } from "framer-motion";

const Sidebar = () => {
  const [selected, setSelected] = useState(0);
  const [expanded, setExpanded] = useState(true);

  const sidebarVariants = {
    true: {
      left: "0",
    },
    false: {
      left: "-60%",
    },
  };
  return (
    <>
      <div
        className="bars"
        style={expanded ? { left: "60%" } : { left: "5%" }}
        onClick={() => setExpanded(!expanded)}
      >
        <FaBars />
      </div>
      <motion.div
        className="Sidebar"
        variants={sidebarVariants}
        animate={window.innerWidth <= 768 ? `${expanded}` : ""}
      >
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
                  className={
                    selected === index ? "menuItem active" : "menuItem"
                  }
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
      </motion.div>
    </>
  );
};

export default Sidebar;
