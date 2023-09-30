import React from "react";
import styles from "./Modal.module.css";
import AccountItem from "./AccountItem/AccountItem";
import { useNavigate } from "react-router";

const Modal = ({ user, loggedIn }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    const loggedIn = JSON.parse(localStorage.getItem("loggedIn")) || [];
    const newLoggedIn = loggedIn.filter((item) => item.id !== user.id);
    localStorage.setItem("loggedIn", JSON.stringify(newLoggedIn));
    localStorage.setItem("currentUser", JSON.stringify(newLoggedIn[0]));
    navigate("/");
  };
  return (
    <div className={styles.modal}>
      <div className={styles.userInfo}>
        <div className={styles.imageContainer}>
          <img src={user.profilepicture} alt="profpic" />
        </div>
        <div className={styles.name}>{user.name}</div>
        <div className={styles.email}>{user.email}</div>
      </div>
      <div className={styles.accountsSection}>
        {loggedIn
          ?.filter((item) => item.id !== user.id)
          ?.map((item) => {
            return <AccountItem account={item} />;
          })}
      </div>
      <button onClick={handleClick} className={styles.signout}>
        Sign Out
      </button>
    </div>
  );
};

export default Modal;
