import React from "react";
import styles from "./GalleryPage.module.css";
import Sidebar from "../SideBar/Sidebar";
import Navbar from "../Navbar/Navbar";

const GalleryPage = () => {
  return (
    <div className={styles.wrapper}>
      <Sidebar />
      <div className={styles.rightSection}>
        <Navbar title={"Gallery"} />
        <div className={styles.commingSoon}>Comming Soon</div>
      </div>
    </div>
  );
};

export default GalleryPage;
