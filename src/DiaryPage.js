import "./DiaryPage.css";
import FormPage from "./FormPage";
import JournalEntryList from "./JournalEntryList";
import { useState } from "react";

const DiaryPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const changeOpen = () => {
    setIsOpen(!isOpen);
  };

  const blankForm = {
    title: "",
    description: "",
    fname: "",
    lname: "",
    skill: "",
    uri: "",
  };

  const [formData, setFormData] = useState(blankForm);
  const changeFormData = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const submitFormHandler = (event) => {
    event.preventDefault();
    const timestamp = new Date();
    const authorFormatted = `${formData.lname}, ${formData.fname}`;
    const data = {
      title: formData.title,
      author: authorFormatted,
      description: formData.description,
      skill: formData.skill,
      date: timestamp,
      image: {
        uri: formData.uri,
        "alt-text": "user uploaded photo",
      },
    };
    // TODO - move posts fetch to journal entry list to this page
    // TODO pass journal entries to journal entry list via a prop
    // TODO submit form data
    // TODO append respons of submit to the top of journal entries
  };

  return (
    <div className="DiaryPage">
      {isOpen ? <div className="screen"> &nbsp; </div> : null}
      <div className="formModal">
        {isOpen ? (
          <FormPage
            visabilityHandler={changeOpen}
            formData={formData}
            changeHandler={changeFormData}
            submitHandler={submitFormHandler}
          />
        ) : null}
      </div>
      <div className="content-container">
        <h1> Diary Page </h1>
        <button className="open-form-button" onClick={changeOpen}>
          + Add New Post
        </button>
        <JournalEntryList />
      </div>
    </div>
  );
};

export default DiaryPage;
