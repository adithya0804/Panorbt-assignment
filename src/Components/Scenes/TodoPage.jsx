import React from "react";
import styles from "./TodoPage.module.css";
import Sidebar from "../SideBar/Sidebar";
import Navbar from "../Navbar/Navbar";

const TodoPage = () => {
  return (
    <div className={styles.wrapper}>
      <Sidebar />
      <div className={styles.rightSection}>
        <Navbar title={"Todo"} />
        <div className={styles.commingSoon}>Comming Soon</div>
      </div>
    </div>
  );
};

export default TodoPage;
