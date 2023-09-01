import "./JournalEntryList.css";
import CardKokatat from "./CardKokatat";

const JournalEntryList = ({ entries }) => {
  return (
    <section className="JournalEntryList">
      <ul>
        {entries.map((entry) => (
          <li key={entry._id}>
            <CardKokatat prop={entry} />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default JournalEntryList;
