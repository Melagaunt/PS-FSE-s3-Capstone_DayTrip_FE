import "./DiaryPage.css";
import FormPage from "./FormPage";
import JournalEntryList from "./JournalEntryList";

const DiaryPage = () => {
  return (
    <div className="DiaryPage">
      <h1>Diary Page</h1>
      <FormPage />
      <JournalEntryList />
    </div>
  );
};

export default DiaryPage;
