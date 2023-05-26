import React, { useContext, useState } from "react";
import { questionContext } from "../pages/App";

const Sort = () => {
  const { list, setDisplayData, displayData,CallSortItems } = useContext(questionContext);

  const [bookMarkDisplay, setbookMarkDisplay] = useState(false);

  const HandleSortItem = (term) => (e) => CallSortItems(term);

  const bookmarkList = () => {
    setbookMarkDisplay(!bookMarkDisplay);
    const data = displayData.filter((item) => item.bookmark === true);
    return bookMarkDisplay ? setDisplayData(data) : setDisplayData(list);
  };

  return (
    <div className="sorting">
      <div className="function">
        <label>SORT</label>

        <input
          type="radio"
          name="sort"
          id="time"
          onChange={HandleSortItem("time")}
        />
        <label>TIME</label>
        <input
          type="radio"
          name="sort"
          id="vote"
          onChange={HandleSortItem("vote")}
        />
        <label>VOTE</label>
      </div>
      <div>
        <button id="bookmarkbutton" onClick={bookmarkList}>
          BOOKMARKED
        </button>
      </div>
    </div>
  );
};

export default Sort;
