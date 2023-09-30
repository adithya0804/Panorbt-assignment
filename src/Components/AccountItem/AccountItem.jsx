import React from "react";
import styles from "./AccountItem.module.css";
const AccountItem = ({ account }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.imageContainer}>
        <img src={account.profilepicture} alt="profilepic" />
      </div>
      <div className={styles.name}>{account.name}</div>
    </div>
  );
};

export default AccountItem;
