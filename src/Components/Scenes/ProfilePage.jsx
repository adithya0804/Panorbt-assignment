import React from "react";
import styles from "./ProfilePage.module.css";
import Sidebar from "../SideBar/Sidebar";
import Navbar from "../Navbar/Navbar";

const ProfilePage = () => {
  return (
    <div className={styles.wrapper}>
      <Sidebar />
      <div className={styles.rightSection}>
        <Navbar title={"Profile"} />
        <div className={styles.commingSoon}>Comming Soon</div>
      </div>
    </div>
  );
};

export default ProfilePage;
