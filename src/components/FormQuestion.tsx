import React, { useState } from "react";
import Questions from "../utils/Questions";
type QuestionProps = {
  questionIndex: number;
};
const FormQuestion = ({ questionIndex }: QuestionProps) => {
  const [data, setData] = useState("");
  const [error, setError] = useState<any>(null);
  function validateChange(e: any) {
    const tempData = e.target.value;
    if (tempData.trim().length === 0) {
      setError(Questions[questionIndex].emptyError);
      return;
    }
    if (
      tempData.trim().split(" ").length > 1 &&
      Questions[questionIndex].type !== "comments"
    ) {
      setError(Questions[questionIndex].hasSpaceError);
      return;
    }
    setError(null);
    setData(tempData);
  }
  function nextQuestionHandler() {}
  return (
    <div>
      {Questions[questionIndex].question}
      {error && <div>{error}</div>}
      <input onChange={(e) => validateChange(e)}></input>
      <button onClick={nextQuestionHandler}>Next Question</button>
    </div>
  );
};

export default FormQuestion;
