import { useState, useEffect } from "react";
import JournalEntry from "./JournalEntry";

const entrs = [
  {
    _id: 1,
    title: "Some title",
    description: "blah balh",
    author: "Jones, Tiffany",
    skill: "Beginner",
    date: "1990-01-01",
  },
  {
    _id: 2,
    title: "Some title",
    description: "blah balh",
    author: "Jones, Tiffany",
    skill: "Beginner",
    date: "1990-01-01",
  },
];

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
