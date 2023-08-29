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

const CardKokatat = ({prop}) => {
	const { _id, title, description, author, skill, date, image } = prop;
	const dateObj = parseDate(date);
	const dateStr = `${dateObj.month} ${dateObj.day}, ${dateObj.year}`;
	
	return (
		<div id={_id} class="blog-card articlePost">
		<img class="" alt={image.alt} src={image.uri}></img>			
			<div class="blog-content">
				<header class="blog-header">
					<div class="blog-subhead">
						<div class="tag">{author}</div>
						<div class="subhead-divider">|</div>
						<div class="blog-date">{dateStr}</div>
					</div>
					<h2 class="blog-title">{title}</h2>
				</header>
				<div class="blog-post">
					<span class="teaser">{description}</span>
				</div>
			</div>
		</div>
	)
}

export default CardKokatat;


// blog-content
// 	blog-header
// 		blog-subhead
// 			tag
// 			subhead-divider
// 			blog-date
// 		blog-title
// 	blog-post