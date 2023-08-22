import "./JournalEntry.css";
import { useState, useEffect } from "react";

const JournalEntry = ({ prop }) => {
  const { _id, title, description, author, skill, date } = prop;
  return (
    <article className="JournalEntry" key={_id}>
      <p>Title: {title}</p>
      <p>Description: {description}</p>
      <p>Author: {author}</p>
      <p>Skill: {skill}</p>
      <p>Date: {date}</p>
    </article>
  );
};

export default JournalEntry;
