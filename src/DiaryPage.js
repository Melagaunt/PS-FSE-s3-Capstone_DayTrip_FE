import "./DiaryPage.css";
import JournalEntryList from "./JournalEntryList";

const DiaryPage=()=>{

    return(
<div className="DiaryPage">
				{/* <div className="page-title">  </div> */}
				<div className="diary-container">
					<h1>Diary Page</h1>
					<JournalEntryList />
				</div>
				
				
</div>

    )

}

export default DiaryPage;