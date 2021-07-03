import { classes } from "istanbul-lib-coverage";
import React, { useState, useRef } from "react";
import styles from "./RadioComponent.module.css";
type InputProps = {
  type: string;
  message: string;
  value1: string;
  value2: string;
  data: any;
  questionIndex: number;
  setQuestionIndex: Function;
};
const RadioComponent = ({
  type,
  message,
  data,
  value1,
  value2,
  questionIndex,
  setQuestionIndex,
}: InputProps) => {
  const [error, setError] = useState("");
  const [value, setValue] = useState("");
  const [isValue1Checked, setIsValue1Checked] = useState(false);
  const [isValue2Checked, setIsValue2Checked] = useState(false);
  function changeHandler(e: any): void {
    setError("");
    setValue(e.target.value);
    console.log(e);
  }

  function submitHandler(e: any) {
    e.preventDefault();
    if (value.length === 0) {
      setError(`Please choose a ${type}`);
    } else {
      data[type] = value;
      setError("");
      setValue("");
      setIsValue1Checked(false);
      setIsValue2Checked(false);
      if (type === "martial_status" && data[type] === "Unmarried")
        setQuestionIndex(questionIndex + 2);
      else setQuestionIndex(questionIndex + 1);
    }
  }
  function handleEnterPress(e: any) {
    if (e.keyCode === 13) {
      submitHandler(e);
    }
  }

  return (
    <div className={styles.form_input}>
      <label className={styles.heading}>{message}</label>
      {error && <div className={styles.error}>{error}</div>}
      <form className={styles.form}>
        <div className={styles.radiocontainer}>
          <input
            type="radio"
            value={value1}
            name={type}
            onClick={(e: any) => {
              setIsValue1Checked(true);
              setIsValue2Checked(false);
              setValue(e.target.value);
            }}
            className={styles.radio}
            checked={isValue1Checked}
          ></input>
          <span className={styles.radio_label}>{value1}</span>
          <input
            type="radio"
            value={value2}
            name={type}
            onClick={(e: any) => {
              setIsValue2Checked(true);
              setIsValue1Checked(false);
              setValue(e.target.value);
            }}
            className={styles.radio}
            checked={isValue2Checked}
          ></input>
          <span className={styles.radio_label}>{value2}</span>
        </div>

        <button
          className={styles.button}
          onClick={submitHandler}
          type="submit"
          onKeyPress={(e) => {
            handleEnterPress(e);
          }}
        >
          Next
        </button>
      </form>
    </div>
  );
};

export default RadioComponent;
