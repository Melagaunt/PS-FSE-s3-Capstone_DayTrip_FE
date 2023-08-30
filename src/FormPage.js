import "./FormPage.css";
import { GrClose } from "react-icons/gr";

const FormPage = ({ visabilityHandler }) => {
  return (
    <form className="FormPage">
      <button onClick={visabilityHandler} className="close-button">
        <GrClose />
      </button>

      <label for="title">Title</label>
      <input type="text" id="title" name="title"></input>

      <div className="full-name">
        <label for="fname">First Name</label>
        <input type="text" id="fname" name="fname"></input>

        <label for="lname">Last Name</label>
        <input type="text" id="lname" name="lname"></input>
      </div>

      <label for="description">Journal Entry</label>
      <textarea
        type="textarea"
        id="description"
        name="description"
        rows="5"
        cols="30"
      ></textarea>

      <label for="skill">Skill</label>
      <select name="skill" id="skill">
        <option value="beginner">Beginner</option>
        <option value="beginner">Intermediate</option>
        <option value="beginner">Expert</option>
      </select>

      <label for="uri">URL</label>
      <input type="url" id="uri" name="uri"></input>

      <input type="submit" className="submit-button"></input>
    </form>
  );
};

export default FormPage;
