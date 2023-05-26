import React, { useContext, useState } from "react";
import { questionContext } from "../pages/App";
import { Icon } from "@iconify/react";

const Display = () => {
  const {
    displayData,
    CallUpVote,
    CallDownVote,
    CallBookMark,
    CallAnswerSubmit,
    CallDelete,
  } = useContext(questionContext);
  const [answer, setAnswer] = useState("");

  const HandleIncrement = (id) => () => CallUpVote(id);

  const HandleDecrement = (id) => () => CallDownVote(id);

  const HandleBookMark = (id) => () => CallBookMark(id);

  const HandleAnswer = (e) => {
    setAnswer(e.target.value);
  };

  const HandleAnswerSubmit = (id) => () => CallAnswerSubmit(id, answer);

  const HandleDelete = (id) => () => CallDelete(id);

  return (
    <>
      {displayData.map((items, index) => {
        return (
          <div key={items.id} className="Display">
            <div className="votes">
              <p>{items.votes}</p>
              <button onClick={HandleIncrement(items.id)}>
                <Icon icon="mdi:triangle" color="#545454" />
              </button>
              <button onClick={HandleDecrement(items.id)}>
                <Icon icon="mdi:triangle-down" color="#545454" />
              </button>
            </div>
            <div className="question">
              <p>{items.ques.toUpperCase()}</p>
              {items.disable ? (
                <p id="displayAns">{items.ans}</p>
              ) : (
                <textarea id="question" onChange={HandleAnswer}></textarea>
              )}
            </div>
            <div className="book">
              <button id="bookmark" onClick={HandleBookMark(items.id)}>
                {items.bookmark ? (
                  <Icon icon="mdi:bookmark" color="#545454" />
                ) : (
                  <Icon icon="mdi:bookmark" color="white" />
                )}
              </button>
              <div>
                {items.disable ? (
                  <></>
                ) : (
                  <button id="ansSubmit" onClick={HandleAnswerSubmit(items.id)}>
                    SUBMIT
                  </button>
                )}
              </div>
              <p id="displayTime">{items.timestamp}</p>
              <button id="delete" onClick={HandleDelete(items.id)}>
                <Icon icon="mdi:trash" />
              </button>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Display;
