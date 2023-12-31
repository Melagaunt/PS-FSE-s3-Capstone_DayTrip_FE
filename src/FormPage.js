import "./FormPage.css";
import { GrClose } from "react-icons/gr";

const FormPage = ({
  visabilityHandler,
  formData,
  changeHandler,
  submitHandler,
}) => {
  return (
    <form className="FormPage" onSubmit={submitHandler}>
      <button onClick={visabilityHandler} className="close-button">
        <GrClose />
      </button>
      <div className="form-group">
        <label for="title">Title</label>
        <input
          type="text"
          id="title"
          name="title"
          value={formData.title}
          onChange={changeHandler}
        ></input>
      </div>

      <div className="full-name">
        <div className="form-group">
          <label for="fname">First Name</label>
          <input
            type="text"
            id="fname"
            name="fname"
            value={formData.fname}
            onChange={changeHandler}
          ></input>
        </div>

        <div className="form-group">
          <label for="lname">Last Name</label>
          <input
            type="text"
            id="lname"
            name="lname"
            value={formData.lname}
            onChange={changeHandler}
          ></input>
        </div>
      </div>

      <div className="form-group">
        <label for="description">Journal Entry</label>
        <textarea
          type="textarea"
          id="description"
          name="description"
          rows="5"
          cols="30"
          value={formData.description}
          onChange={changeHandler}
        ></textarea>
      </div>

      <div className="form-group">
        <label for="skill">Skill</label>
        <select
          name="skill"
          id="skill"
          value={formData.skill}
          onChange={changeHandler}
        >
          <option value="" defaultValue disabled>
            Choose a skill level
          </option>
          <option value="Beginner">Beginner</option>
          <option value="Intermediate">Intermediate</option>
          <option value="Expert">Expert</option>
        </select>
      </div>

      <div className="form-group">
        <label for="uri">URL</label>
        <input
          type="url"
          id="uri"
          name="uri"
          value={formData.uri}
          onChange={changeHandler}
        ></input>
      </div>

      <input type="submit" className="submit-button"></input>
    </form>
  );
};

export default FormPage;
