import React from "react";
import styles from "./PostPage.module.css";
import Sidebar from "../SideBar/Sidebar";
import Navbar from "../Navbar/Navbar";

const PostPage = () => {
  return (
    <div className={styles.wrapper}>
      <Sidebar />
      <div className={styles.rightSection}>
        <Navbar title={"Post"} />
        <div className={styles.commingSoon}>Comming Soon</div>
      </div>
    </div>
  );
};

export default PostPage;
