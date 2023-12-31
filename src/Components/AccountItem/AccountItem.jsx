import React from "react";

import styles from "./AccountItem.module.css";
const AccountItem = ({ account }) => {
  const handleClick = () => {
    const loggedIn = JSON.parse(localStorage.getItem("loggedIn")) || [];
    const alreadyLoggedin =
      loggedIn.filter((item) => item.id === account.id).length === 0;
    if (loggedIn.length > 0 && alreadyLoggedin) {
      loggedIn.push(account);
      localStorage.setItem("loggedIn", JSON.stringify(loggedIn));
    } else {
      localStorage.setItem("loggedIn", JSON.stringify([account]));
    }
    localStorage.setItem("currentUser", JSON.stringify(account));
  };
  return (
    <div className={styles.wrapper} onClick={handleClick}>
      <div className={styles.imageContainer}>
        <img src={account.profilepicture} alt="profilepic" />
      </div>
      <div className={styles.name}>{account.name}</div>
    </div>
  );
};

export default AccountItem;
