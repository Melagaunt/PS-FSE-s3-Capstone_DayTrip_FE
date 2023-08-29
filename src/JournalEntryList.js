import { useState, useEffect } from "react";
import JournalEntry from "./JournalEntry";
import "./JournalEntryList.css";
import CardKokatat from "./CardKokatat";


const ROOT_URL = process.env.ROOT_URL || "http://localhost:5000";

const JournalEntryList = () => {
  const [entries, setEntries] = useState([]);
  useEffect(() => {
    fetch(`${ROOT_URL}/journalentries`)
      .then((entries) => entries.json())
      .then((entries) => setEntries(entries));
  }, []);

  return (
    <section className= 'JournalEntryList'>
      <ul>
        {entries.map((entry) => (
          <li key={entry._id}>
            {/* { <JournalEntry prop={entry} /> } */}
						<CardKokatat prop={entry} />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default JournalEntryList;
