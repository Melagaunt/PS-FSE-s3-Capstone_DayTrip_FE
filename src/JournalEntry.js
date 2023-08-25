import "./JournalEntry.css";
import { useState, useEffect } from "react";
const parseDate = (dateTime) => {
  const dateObj = { date: "", day: "", month: "", year: "", weekday: "" };
  const parsedDate = new Date(
    Date.parse(dateTime.split("T")[0].replaceAll("-", "/"))
  );

  dateObj.date = parsedDate;
  dateObj.year = parsedDate.getFullYear();
  dateObj.month = parsedDate.toLocaleString("default", { month: "long" });
  dateObj.weekday = parsedDate.toLocaleString("default", { weekday: "long" });
  dateObj.day = parsedDate.getDate();
  return dateObj;
};

const JournalEntry = ({ prop }) => {
  const { _id, title, description, author, skill, date } = prop;
  const dateObj = parseDate(date);
  const dateStr = `${dateObj.month} ${dateObj.day}, ${dateObj.year}`;
  return (
    <>
      <article className="JournalEntry" key={_id}>
        <div className="force-ellipsis">
          <div>
            <h2>{title}</h2>
            <h3>{author}</h3>
            <h4>{dateStr}</h4>
          </div>
          <p>{description}</p>
        </div>
      </article>
      <button>Read More</button>
    </>
  );
};

export default JournalEntry;
