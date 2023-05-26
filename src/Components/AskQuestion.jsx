import React, { useContext, useState } from "react";
import { questionContext } from "../pages/App";
import { v4 as uuid } from "uuid";

const AskQuestion = () => {
  const [question, setQuestion] = useState("");
  // const [Id, setId] = useState(0);
  const { setlist, setDisplayData } = useContext(questionContext);
  const [error, setError] = useState(false);
  const handleChange = (e) => {
    setQuestion(e.target.value);
  };
  const date =
    new Date().getFullYear() +
    "-" +
    new Date().getMonth() +
    "-" +
    new Date().getDate() +
    "  " +
    new Date().getHours() +
    ":" +
    new Date().getMinutes() +
    ":" +
    new Date().getSeconds();

  const handleSubmit = (e) => {
    e.preventDefault();
    // if (question.length > 0) {
    // setId(Id + 1);

    let value = {
      id: uuid(),
      timestamp: date,
      ques: question,
      ans: "",
      votes: 0,
      bookmark: false,
      disable: false,
    };
    if (question.length === 0) {
      setError(true);
      return;
    }

    setError(false);
    console.log(error);
    setlist((prev) => [...prev, value]);
    setDisplayData((prev) => [...prev, value]);
    setQuestion((prev) => ({ ...prev, ques: "" }));
    // }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="askQuestion">
        <div>
          <center>
            <p>ASK</p>
            <p> QUESTION</p>
          </center>
        </div>
        <div className="textbox">
          <textarea
            id="question"
            value={question.ques}
            onChange={handleChange}
          ></textarea>
          {error && question.length >= 0 ? (
            <h5>*Question cant be empty</h5>
          ) : (
            ""
          )}
        </div>
        <div>
          {/* <button onClick={handleSubmit}>SUBMIT</button> */}
          <input type="submit" value="SUBMIT" />
        </div>
      </div>
    </form>
  );
};

export default AskQuestion;
