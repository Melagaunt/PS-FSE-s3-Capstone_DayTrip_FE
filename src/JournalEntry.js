import "./JournalEntry.css";
import { useState, useEffect } from "react";

const entries = [
  {
    title: "Some title",
    Description: "blah balh",
    Author: "Jones, Tiffany",
    Skill: "Beginner",
    Date: "1990-01-01",
  },
  {
    title: "Some title",
    Description: "blah balh",
    Author: "Jones, Tiffany",
    Skill: "Beginner",
    Date: "1990-01-01",
  },
  {
    title: "Some title",
    Description: "blah balh",
    Author: "Jones, Tiffany",
    Skill: "Beginner",
    Date: "1990-01-01",
  },
];

const JournalEntry = () => {
  const [entries, setEntries] = useState([]);
  useEffect(() => {
    setEntries(entries);
  }, []);
  return <div className="JournalEntry"></div>;
};

export default JournalEntry;
