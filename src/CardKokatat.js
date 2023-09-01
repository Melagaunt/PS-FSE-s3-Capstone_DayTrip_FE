import "./CardKokatat.css";

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

const CardKokatat = ({ prop }) => {
  const { _id, title, description, author, skill, date, image } = prop;
  const dateObj = parseDate(date);
  const dateStr = `${dateObj.month} ${dateObj.day}, ${dateObj.year}`;

  return (
    <div id={_id} className="blog-card articlePost">
      <img className="" alt={image.alt} src={image.uri}></img>
      <div className="blog-content">
        <header className="blog-header">
          <div className="blog-subhead">
            <div className="tag">{author}</div>
            <div className="subhead-divider">|</div>
            <div className="blog-date">{dateStr}</div>
          </div>
          <h2 className="blog-title">{title}</h2>
        </header>
        <div className="blog-post">
          <span className="teaser">{description}</span>
        </div>
      </div>
    </div>
  );
};

export default CardKokatat;
