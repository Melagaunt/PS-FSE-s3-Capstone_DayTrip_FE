import "./JournalEntry.css";
import { useState, useEffect } from "react";



const JournalEntry = ({prop}) => {
	const { title, description, author, skill, date } = prop
	return (
		<article className="JournalEntry">
			<p>Title: {title}</p>
			<p>Description: {description}</p>
			<p>Author: {author}</p>
			<p>Skill: {skill}</p>
			<p>Date: {date}</p>
		</article>
	);
};

export default JournalEntry;
