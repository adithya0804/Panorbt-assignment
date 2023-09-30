import React, { useState } from "react";
import styles from "./Sidebar.module.css";
import { NavLink } from "react-router-dom";
const Sidebar = () => {
  const [user] = useState(JSON.parse(localStorage.getItem("currentUser")));
  return (
    <div className={styles.wrapper}>
      <div className={styles.navlist}>
        <NavLink
          to={`/${user?.username}`}
          className={({ isActive }) =>
            isActive ? styles.active : styles.notActive
          }
        >
          Profile
        </NavLink>
        <hr />
        <NavLink
          to={"/post"}
          className={({ isActive }) =>
            isActive ? styles.active : styles.notActive
          }
        >
          Posts
        </NavLink>
        <hr />
        <NavLink
          to={"/gallery"}
          className={({ isActive }) =>
            isActive ? styles.active : styles.notActive
          }
        >
          Gallery
        </NavLink>
        <hr />
        <NavLink
          to={"/todo"}
          className={({ isActive }) =>
            isActive ? styles.active : styles.notActive
          }
        >
          ToDo
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
