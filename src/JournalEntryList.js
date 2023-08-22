import { useState, useEffect } from "react";
import JournalEntry from "./JournalEntry";

const JournalEntryList = () => {
  const [entries, setEntries] = useState([]);
  useEffect(() => {
    fetch(entrs).then((vars) => setEntries(entrs));
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
