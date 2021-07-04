import React, { useState } from "react";
import InputComponent from "../components/InputComponent";
import RadioComponent from "../components/RadioComponent";
import CheckBoxComponent from "../components/CheckBoxComponent";
import styles from "./FormScreen.module.css";
type Employee = {
  firstName: string;
  lastName: string;

  martial_status: string;
  spouse?: string;
  gender: string;
  comments?: string;
};

const FormScreen = () => {
  const [questionIndex, setQuestionIndex] = useState<number>(0);
  const [data, setData] = useState({});

  const questions = [
    <InputComponent
      type="firstName"
      data={data}
      message={"Please enter your First Name"}
      required={true}
      questionIndex={questionIndex}
      setQuestionIndex={setQuestionIndex}
      name="First Name"
    ></InputComponent>,
    <InputComponent
      type="lastName"
      data={data}
      message={"Please enter your Last Name"}
      required={true}
      questionIndex={questionIndex}
      setQuestionIndex={setQuestionIndex}
      name="Last Name"
    ></InputComponent>,

    <RadioComponent
      type="gender"
      data={data}
      value1={"Male"}
      value2={"Female"}
      message={"Please tell us your Gender"}
      questionIndex={questionIndex}
      setQuestionIndex={setQuestionIndex}
      name="Gender"
    />,
    <RadioComponent
      type="martial_status"
      data={data}
      value1={"Married"}
      value2={"Unmarried"}
      message={"Please tell us your Martial Status"}
      questionIndex={questionIndex}
      setQuestionIndex={setQuestionIndex}
      name="Martial Status"
    />,
    <InputComponent
      type="spouse"
      data={data}
      message={"Please enter your Spouse Name"}
      required={true}
      questionIndex={questionIndex}
      setQuestionIndex={setQuestionIndex}
      name="Spouse"
    ></InputComponent>,
    <InputComponent
      type="comments"
      data={data}
      message={"Any other Comments"}
      required={false}
      questionIndex={questionIndex}
      setQuestionIndex={setQuestionIndex}
    ></InputComponent>,

    <CheckBoxComponent
      questionIndex={questionIndex}
      setQuestionIndex={setQuestionIndex}
      data={data}
    />,
  ];

  return <div className={styles.form}>{questions[questionIndex]}</div>;
};

export default FormScreen;
