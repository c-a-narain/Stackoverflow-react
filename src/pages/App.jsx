import "./App.css";
import React, { createContext, useState } from "react";
import AskQuestion from "../Components/AskQuestion";
import Sort from "../Components/Sort";
import Display from "../Components/Display";

const questionContext = createContext();

function App() {
  const [list, setlist] = useState([]);
  const [displayData, setDisplayData] = useState([]);

  const UpVote = (id) => {
    const upvote = [...list];
    upvote.map((items) => {
      if (items.id === id) return {...items,votes:items.votes++};
      else return items;
    });
    return upvote;
  };

  const DownVote = (id) => {
    const downvote = [...list];
    // const downvote =  list.map((items) => {
    downvote.map((items) => {
      if (items.id === id) return {...items,votes:items.votes--};
      else return items;
    });
    return downvote;
  };

  const BookMark = (id) => {
    const bookmarks = [...list];
    bookmarks.map((items) => {
    // const bookmarks = list.map((items) => {
      // if (items.id === id) return {...items, bookmark: !items.bookmark}
      if (items.id === id) return (items.bookmark = !items.bookmark);
       else {
        return items;
      }
    });
    return bookmarks;
  };

  const SubmittedAnswer = (id, answer) => {
    const submittedAnswer = [...list];
    submittedAnswer.map((items) => {
      if (items.id === id) {
        // items.disable = !items.disable;
        // return {...items, ans:answer, disable: !items.disable}
        items.ans = answer;
        items.disable = !items.disable;
        return items;
      } else {
        return items;
      }
    });
    return submittedAnswer;
  };

  const Delete = (id) => {
    const deletedList = [...list];
    let data;
    deletedList.map((items) => {
      if (items.id === id) {
        return (data = deletedList.filter((i) => i.id !== id));
      } else {
        return items;
      }
    });
    return data;
  };

  const SortItems = (term) => {
    let myData;
    if (term === "time") {
      myData = []
        .concat(displayData)
        .sort((a, b) => (a.timestamp < b.timestamp ? 1 : -1));
      console.log(myData);
    } else if (term === "vote") {
      myData = [].concat(displayData).sort((a, b) => +a.votes - +b.votes);
    }
    return myData;
  }

  const CallSortItems = (term) => {
    setDisplayData(SortItems(term));
  }

  const CallUpVote = (id) => {
    setlist(UpVote(id));
  };

  const CallDownVote = (id) => {
    setlist(DownVote(id));
  };

  const CallBookMark = (id) => {
    setlist(BookMark(id));
  };

  const CallAnswerSubmit = (id, answer) => {
    setlist(SubmittedAnswer(id, answer));
  };

  const CallDelete = (id) => {
    console.log(Delete(id));
    setlist(Delete(id));
    setDisplayData(Delete(id));
  };

  return (
    <questionContext.Provider
      value={{
        list,
        setlist,
        displayData,
        setDisplayData,
        CallUpVote,
        CallDownVote,
        CallBookMark,
        CallAnswerSubmit,
        CallDelete,
        CallSortItems
      }}
    >
      <div className="App">
        <AskQuestion />
        <Sort />
        <Display />
      </div>
    </questionContext.Provider>
  );
}

export { questionContext };
export default App;
