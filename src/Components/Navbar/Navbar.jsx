import React, { useEffect, useState } from "react";
import styles from "./Navbar.module.css";
import Modal from "./Modal.js/Modal";
import { useParams } from "react-router";

const Navbar = ({ title }) => {
  const params = useParams();
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("currentUser"))
  );
  const [modalOpen, setModalOpen] = useState(false);
  const [loggedIn] = useState(JSON.parse(localStorage.getItem("loggedIn")));
  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("currentUser")));
  }, [params.username]);
  const handleClick = () => {
    setModalOpen(!modalOpen);
  };
  return (
    <nav className={styles.wrapper}>
      <div className={styles.title}>{title}</div>
      <div onClick={handleClick} className={styles.imageSection}>
        <div className={styles.imageContainer}>
          <img src={user?.profilepicture} alt="profpic" />
        </div>
        <span className={styles.name}>{user?.name}</span>
      </div>
      {modalOpen && <Modal user={user} loggedIn={loggedIn} />}
    </nav>
  );
};

export default Navbar;
