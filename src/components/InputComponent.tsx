import React, { useState, useEffect, KeyboardEvent } from "react";
import styles from "./InputComponent.module.css";
import { Employee } from "../types/EmployeeType";
type InputProps = {
  type: "firstName" | "lastName" | "spouse" | "comments";
  message: string;
  required: boolean;
  questionIndex: number;
  setQuestionIndex: Function;
  data: Employee;
  name?: string;
};
const InputComponent: React.FC<InputProps> = ({
  type,
  required,
  data,
  message,
  questionIndex,
  setQuestionIndex,
  name,
}) => {
  const [error, setError] = useState("");
  const [value, setValue] = useState(data[type] || "");
  const [changer, setChanger] = useState(false);

  useEffect(() => {
    setValue(data[type] || "");
    setChanger(false);
  }, [changer]);

  function validator(s: string): boolean {
    if (!required) return true;
    if (!s || s.trim().length === 0) {
      setError("Please enter a value");
      return false;
    }
    if (s.trim().split(" ").length > 1) {
      setError(`${name} cannot have spaces`);
      return false;
    }
    setError("");
    return true;
  }
  function changeHandler(e: React.ChangeEvent<HTMLInputElement>): void {
    validator(e.target.value);
    setValue(e.target.value);
  }

  function submitHandler(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault();
    if (validator(value)) {
      data[type] = value;
      setError("");
      setValue("");
      setChanger(true);
      setQuestionIndex(questionIndex + 1);
      return;
    }
  }
  function goToPreviousQuestion() {
    setError("");

    if (type === "comments" && data["martial_status"] === "Unmarried")
      setQuestionIndex(questionIndex - 2);
    else setQuestionIndex(questionIndex - 1);
    setChanger(true);
    return;
  }

  return (
    <React.Fragment>
      {questionIndex > 0 && (
        <button
          onClick={goToPreviousQuestion}
          className={styles.previous_button}
        >
          &larr;
        </button>
      )}
      <div className={styles.form_input}>
        <label>{message}</label>

        {error && <div className={styles.error}>{error}</div>}
        <form className={styles.form}>
          <input
            className={styles.input}
            onChange={(e) => changeHandler(e)}
            value={value}
            autoFocus
          ></input>
          <button
            className={styles.button}
            onClick={(e) => submitHandler(e)}
            type="submit"
          >
            Next
          </button>
        </form>
      </div>
    </React.Fragment>
  );
};

export default InputComponent;
