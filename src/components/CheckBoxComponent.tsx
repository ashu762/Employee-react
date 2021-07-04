import React, { useState, useEffect } from "react";
import styles from "./CheckBoxComponent.module.css";
import { useHistory } from "react-router-dom";
import { idText } from "typescript";
type InputProps = {
  questionIndex: number;
  setQuestionIndex: Function;
  data: object;
};
const CheckBoxComponent = ({
  questionIndex,
  setQuestionIndex,
  data,
}: InputProps) => {
  const [checked, setChecked] = useState(false);
  const [error, setError] = useState("");
  const [changer, setChanger] = useState(false);
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  useEffect(() => {
    setChanger(false);
  }, [changer]);

  useEffect(() => {
    if (loading) {
      const url = `https://employeeapi2626.herokuapp.com/api/employees`;

      try {
        fetch(url, {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify(data),
        })
          .then((response) => response.json())
          .then((response) => {
            setLoading(false);
            history.push({
              pathname: "/success",
              state: {
                props: {
                  data: data,
                },
              },
            });
          });
      } catch (error) {
        console.log(error);
        setLoading(false);
        alert("Please try Again!");
      }
    }
  }, [loading]);
  async function submitHandler() {
    if (!checked) {
      setError("Please check the terms and Conditions");
      return;
    }
    setLoading(true);
  }
  function goToPreviousQuestion(e: any) {
    setError("");
    setQuestionIndex(questionIndex - 1);
    setChanger(true);

    return;
  }
  return (
    <React.Fragment>
      {questionIndex > 0 && (
        <button
          onClick={goToPreviousQuestion}
          className={styles.previous_button}
          disabled={loading}
        >
          &larr;
        </button>
      )}
      <div className={styles.form_input}>
        {error && <div className={styles.error}>{error}</div>}
        <div className={styles.terms}>
          <input
            className={styles.input}
            type="checkbox"
            onClick={(e) => {
              setChecked(!checked);
            }}
            disabled={loading}
          ></input>
          <label>I accept the terms and Conditions</label>
        </div>
        <button
          onClick={submitHandler}
          className={styles.button}
          disabled={loading}
        >
          {loading ? "Loading..." : "Submit"}
        </button>
      </div>
    </React.Fragment>
  );
};

export default CheckBoxComponent;
