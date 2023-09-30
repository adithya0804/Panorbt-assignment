import React, { useEffect, useState } from "react";
import axios from "axios";
import PubSub from "pubsub-js";
import styles from "./LandingPage.module.css";
import AccountItem from "../AccountItem/AccountItem";
import { Link } from "react-router-dom";
const LandingPage = () => {
  const [users, setUsers] = useState([]);
  const fetchusers = async () => {
    try {
      const result = await axios.get("https://panorbit.in/api/users.json");
      setUsers(result.data.users);
      PubSub.publish("userData", result.data.users);
    } catch (e) {
      console.error(e);
    }
  };
  useEffect(() => {
    fetchusers();
  }, []);

  return (
    <div className={styles.wrapper}>
      <div className={styles.accountPicker}>
        <div className={styles.titleSection}>Select an Account</div>
        <div className={styles.accounts}>
          {users.map((item) => {
            return (
              <Link
                key={item.id}
                to={`/${item.username}`}
                className={styles.link}
              >
                <AccountItem account={item} />
              </Link>
            );
          })}
        </div>
        <div className={styles.accountSection}></div>
      </div>
    </div>
  );
};

export default LandingPage;
