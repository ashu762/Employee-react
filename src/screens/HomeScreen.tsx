import React from "react";
import { useHistory } from "react-router";
import styles from "./HomeScreen.module.css";
const HomeScreen = () => {
  const history = useHistory();
  function submitFormHandler() {
    history.push({
      pathname: "/form",
    });
  }
  function viewPreviousForms() {
    history.push({
      pathname: "/previous",
    });
  }
  return (
    <div className={styles.screen}>
      <div className={styles.primary_heading}>
        Welome to the Employee Registration Page
      </div>
      <div className={styles.secondary_heading}>What would you like to Do?</div>
      <div className={styles.center_button}>
        <button className={styles.button} onClick={submitFormHandler}>
          Fill Form
        </button>
        <button className={styles.button} onClick={viewPreviousForms}>
          View Previous Forms
        </button>
      </div>
    </div>
  );
};
export default HomeScreen;
