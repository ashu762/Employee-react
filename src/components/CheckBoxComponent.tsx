import React, { useState } from "react";
import styles from "./CheckBoxComponent.module.css";
type InputProps = {
  questionIndex: number;
  setQuestionIndex: Function;
};
const CheckBoxComponent = ({ questionIndex, setQuestionIndex }: InputProps) => {
  const [checked, setChecked] = useState(false);
  const [error, setError] = useState("");
  function submitHandler() {
    if (!checked) {
      setError("Please check the terms and Conditions");
      return;
    }
    setQuestionIndex(questionIndex + 1);
  }
  return (
    <div className={styles.form_input}>
      {error && <div className={styles.error}>{error}</div>}
      <div className={styles.terms}>
        <input
          className={styles.input}
          type="checkbox"
          onClick={(e) => {
            setChecked(!checked);
          }}
        ></input>
        <div>I accept the terms and Conditions</div>
      </div>
      <button onClick={submitHandler} className={styles.button}>
        Submit
      </button>
    </div>
  );
};

export default CheckBoxComponent;
