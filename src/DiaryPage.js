import "./DiaryPage.css";
import FormPage from "./FormPage";
import JournalEntryList from "./JournalEntryList";
import { useState } from "react";

const DiaryPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const changeOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="DiaryPage">
      {isOpen ? <div className="screen"> &nbsp; </div> : null}
      <h1> Diary Page </h1>
      <button onClick={changeOpen}></button>
      <div className="formModal">
        {isOpen ? <FormPage visabilityHandler={changeOpen} /> : null}
      </div>
      <JournalEntryList />
    </div>
  );
};

export default DiaryPage;
