import React from "react";
import styles from "./ThankYouScreen.module.css";
import { useHistory } from "react-router-dom";
const ThankYouScreen: React.FC = () => {
  const history = useHistory();
  function submitAnotherFormHandler() {
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
      <div>Thank You For taking the Time to fill the Form</div>
      <div className={styles.secondary_heading}>
        Your data has been recieved perfectly
      </div>
      <div className={styles.center_button}>
        <button className={styles.button} onClick={submitAnotherFormHandler}>
          Submit Another Form
        </button>
        <button className={styles.button} onClick={viewPreviousForms}>
          View Previous Forms
        </button>
      </div>
    </div>
  );
};

export default ThankYouScreen;
