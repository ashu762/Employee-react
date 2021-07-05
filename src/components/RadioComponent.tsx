import { classes } from "istanbul-lib-coverage";
import React, { useState, useEffect } from "react";
import styles from "./RadioComponent.module.css";
import { Employee } from "../types/EmployeeType";
type InputProps = {
  type: "martial_status" | "gender";
  message: string;
  value1: string;
  value2: string;
  data: Employee;
  questionIndex: number;
  setQuestionIndex: Function;
  name: string;
};
const RadioComponent: React.FC<InputProps> = ({
  type,
  message,
  data,
  value1,
  value2,
  questionIndex,
  setQuestionIndex,
  name,
}) => {
  const [error, setError] = useState("");
  const [value, setValue] = useState(data[type] || "");
  const [changer, setChanger] = useState(false);

  useEffect(() => {
    setValue(data[type]);
    setChanger(false);
  }, [changer]);

  function changeHandler(e: React.ChangeEvent<HTMLInputElement>): void {
    setError("");
    setValue(e.target.value);
    console.log(e);
  }

  function submitHandler(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    console.log("asdsasds");
    if (!value || value.length === 0) {
      setError(`Please choose a ${name}`);
    } else {
      data[type] = value;
      setError("");
      setValue("");
      setChanger(true);
      if (type === "martial_status" && data[type] === "Unmarried")
        setQuestionIndex(questionIndex + 2);
      else setQuestionIndex(questionIndex + 1);
    }
  }
  function goToPreviousQuestion(e: React.MouseEvent<HTMLButtonElement>) {
    if (e.detail === 0) return;
    setError("");

    setQuestionIndex(questionIndex - 1);
    setChanger(true);
    return;
  }

  return (
    <React.Fragment>
      {
        <button
          type="reset"
          onClick={goToPreviousQuestion}
          className={styles.previous_button}
        >
          &larr;
        </button>
      }
      <div className={styles.form_input}>
        <label className={styles.heading}>{message}</label>
        {error && <div className={styles.error}>{error}</div>}
        <form className={styles.form}>
          <div className={styles.radiocontainer}>
            <input
              type="radio"
              value={value1}
              name={type}
              onChange={(e: any) => {
                setValue(e.target.value);
              }}
              className={styles.radio}
              checked={value === value1 ? true : false}
            ></input>
            <span className={styles.radio_label}>{value1}</span>
            <input
              type="radio"
              value={value2}
              name={type}
              onChange={(e: any) => {
                setValue(e.target.value);
              }}
              className={styles.radio}
              checked={value === value2 ? true : false}
            ></input>
            <span className={styles.radio_label}>{value2}</span>
          </div>

          <button
            className={styles.button}
            onClick={submitHandler}
            type="submit"
          >
            Next
          </button>
        </form>
      </div>
    </React.Fragment>
  );
};

export default RadioComponent;
