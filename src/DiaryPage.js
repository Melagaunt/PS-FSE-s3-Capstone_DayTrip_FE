import "./DiaryPage.css";
import FormPage from "./FormPage";
import JournalEntryList from "./JournalEntryList";

const DiaryPage = () => {
	return (
		<div className="DiaryPage" >
		<div className="screen" > &nbsp; </div>
			<h1> Diary Page </h1>
			<div className="formModal" >
				<FormPage />
			</div>
			<JournalEntryList />
		</div>
	);
};

export default DiaryPage;