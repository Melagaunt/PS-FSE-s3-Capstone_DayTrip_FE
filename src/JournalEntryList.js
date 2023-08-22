import { useState, useEffect } from "react";
import JournalEntry from './JournalEntry'


const entrs = [
	{
		title: "Some title",
		description: "blah balh",
		author: "Jones, Tiffany",
		skill: "Beginner",
		date: "1990-01-01",
	},
	{
		title: "Some title",
		description: "blah balh",
		author: "Jones, Tiffany",
		skill: "Beginner",
		date: "1990-01-01",
	}
]

const JournalEntryList = () => {
	const [entries, setEntries] = useState([]);
	useEffect(() => {
		setEntries(entrs);
	}, []);

	return (
		<section>
			<ul>
				{	entries.map(entry => <li><JournalEntry prop={entry} /></li>)	}
			</ul>
		</section>
	)
}

export default JournalEntryList