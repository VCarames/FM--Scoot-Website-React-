import { Link } from "react-router-dom";
import careerData from "/public/data/careers";

function JobListings() {
  return (
    <section className="careers-section">
      <ul className="careers-section__list">
        {careerData.careers.map((career) => (
          <li className="careers-section__list-item" key={career.id}>
            <div className="careers-section__list-info">
              <p className="careers-section__list-position">
                {career.position}
              </p>
              <p className="careers-section__list-location">
                {career.location}
              </p>
            </div>

            <Link to="/" className="careers-section__list-btn button">
              Apply
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default JobListings;
