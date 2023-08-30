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
      <div className="formModal">
        {isOpen ? <FormPage visabilityHandler={changeOpen} /> : null}
      </div>
      <div className="content-container">
      <h1> Diary Page </h1>
      <button className="open-form-button" onClick={changeOpen}>+ Add New Post</button>
      <JournalEntryList />
    </div>
    </div>
  );
};

export default DiaryPage;
