import { useState, useEffect } from "react";
import JournalEntry from "./JournalEntry";

const ROOT_URL = process.env.ROOT_URL || "http://localhost:5000";

const JournalEntryList = () => {
  const [entries, setEntries] = useState([]);
  useEffect(() => {
    fetch(`${ROOT_URL}/journalentries`)
      .then((entries) => entries.json())
      .then((entries) => setEntries(entries));
  }, []);

  return (
    <section>
      <ul>
        {entries.map((entry) => (
          <li key={entry._id}>
            <JournalEntry prop={entry} />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default JournalEntryList;
