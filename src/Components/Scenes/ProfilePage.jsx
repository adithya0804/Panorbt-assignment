import React, { useState, useEffect } from "react";
import styles from "./ProfilePage.module.css";
import Sidebar from "../SideBar/Sidebar";
import Navbar from "../Navbar/Navbar";
import { useParams } from "react-router";

const ProfilePage = () => {
  const getTruncatedLocation = (value) => {
    return value?.replace("-", "");
  };
  const params = useParams();
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("currentUser"))
  );
  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("currentUser")));
  }, [params.username]);
  return (
    <div className={styles.wrapper}>
      <Sidebar />
      <div className={styles.rightSection}>
        <Navbar title={"Profile"} />
        <div className={styles.content}>
          <div className={styles.details}>
            <div className={styles.imageSection}>
              <div className={styles.imageContainer}>
                <img src={user.profilepicture} alt="prof" />
              </div>
              <div className={styles.name}>{user.name}</div>
            </div>
            <div className={styles.userDetails}>
              <div className={styles.detailsRow}>
                <span className={styles.key}>Username</span>
                <span className={styles.colon}>:</span>
                <span className={styles.value}>{user.username}</span>
              </div>
              <div className={styles.detailsRow}>
                <span className={styles.key}>e-mail </span>
                <span className={styles.colon}>:</span>
                <span className={styles.value}>{user.email}</span>
              </div>
              <div className={styles.detailsRow}>
                <span className={styles.key}>Phone</span>
                <span className={styles.colon}>:</span>
                <span className={styles.value}>{user.phone}</span>
              </div>
              <div className={styles.detailsRow}>
                <span className={styles.key}>Website</span>
                <span className={styles.colon}>:</span>
                <span className={styles.value}>{user.website}</span>
              </div>
              <div className={styles.companyDetails}>
                <div className={styles.companyName}> Company</div>
                <div className={styles.detailsRow}>
                  <span className={styles.key}>Name </span>
                  <span className={styles.colon}>:</span>
                  <span className={styles.value}>{user.company.name}</span>
                </div>
                <div className={styles.detailsRow}>
                  <span className={styles.key}>Catchphrase</span>
                  <span className={styles.colon}>:</span>
                  <span className={styles.value}>
                    {user.company.catchPhrase}
                  </span>
                </div>
                <div className={styles.detailsRow}>
                  <span className={styles.key}>bs</span>
                  <span className={styles.colon}>:</span>
                  <span className={styles.value}>{user.company.bs}</span>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.address}>
            <div className={styles.addressDetails}>
              <div className={styles.addressTitle}> Address :</div>
              <div className={styles.detailsRow}>
                <span className={styles.key}>Street </span>
                <span className={styles.colon}>:</span>
                <span className={styles.value}>{user.address.street}</span>
              </div>
              <div className={styles.detailsRow}>
                <span className={styles.key}>Suite</span>
                <span className={styles.colon}>:</span>
                <span className={styles.value}>{user.address.suite}</span>
              </div>
              <div className={styles.detailsRow}>
                <span className={styles.key}>City</span>
                <span className={styles.colon}>:</span>
                <span className={styles.value}>{user.address.city}</span>
              </div>
              <div className={styles.detailsRow}>
                <span className={styles.key}>Zipcode</span>
                <span className={styles.colon}>:</span>
                <span className={styles.value}>{user.address.zipcode}</span>
              </div>
            </div>
            <div className={styles.addressMap}>
              <iframe
                title={`${user.username} location`}
                src={`https://maps.google.com/maps?q=${getTruncatedLocation(
                  user.address.geo.lat
                )},${getTruncatedLocation(
                  user.address.geo.lng
                )}&hl=es;&output=embed`}
                className={styles.map}
              />
              <div className={styles.locationInfo}>
                <span className={styles.label}>Lat :</span>
                <span className={styles.ans}>{user.address.geo.lat}</span>
                <span className={styles.label}>Long :</span>
                <span className={styles.ans}>{user.address.geo.lng}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
