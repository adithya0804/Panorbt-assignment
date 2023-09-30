import React, { useState } from "react";
import styles from "./Sidebar.module.css";
import { Link } from "react-router-dom";
const Sidebar = () => {
  const [user] = useState(JSON.parse(localStorage.getItem("currentUser")));
  return (
    <div className={styles.wrapper}>
      <div className={styles.navlist}>
        <Link to={`/${user?.username}`} className={styles.navItem}>
          Profile
        </Link>
        <Link to={"/post"} className={styles.navItem}>
          Posts
        </Link>
        <Link to={"/gallery"} className={styles.navItem}>
          Gallery
        </Link>
        <Link to={"/todo"} className={styles.navItem}>
          ToDo
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
