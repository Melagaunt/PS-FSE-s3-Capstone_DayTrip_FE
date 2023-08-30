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
		title: '',
		description: '',
		author: '',
		skill: '',
		date: '',
		image: {
			uri: '',
			"alt-text": ''
		},
	}

	const [formData, setFormData] = useState(blankForm);
	const changeFormData = (event) => {
		const {name, value} = event.target;
		setFormData ( {...formData, [name]:value } )
	}

	const submitFormHandler = (event) => {
		event.preventDefault()
		console.log(formData)
	}

	return (
		<div className="DiaryPage">
			{isOpen ? <div className="screen"> &nbsp; </div> : null}
			<div className="formModal">
				{isOpen ? <
					FormPage visabilityHandler={changeOpen} 
					formData = {formData} 
					changeHandler = {changeFormData} 
					submitHandler = {submitFormHandler}
				/> : null}
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
