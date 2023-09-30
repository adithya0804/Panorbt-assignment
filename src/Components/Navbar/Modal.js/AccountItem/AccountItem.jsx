import React from "react";
import styles from "./AccountItem.module.css";
import { useNavigate } from "react-router";
const AccountItem = ({ account }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    localStorage.setItem("currentUser", JSON.stringify(account));
    navigate(`/${account.username}`);
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
