import img01 from "/src/assets/images/our-tech.jpg";
import img02 from "/src/assets/images/our-integrity.jpg";
import img03 from "/src/assets/images/our-community.jpg";

function Values() {
  return (
    <>
      <section className="values-section values-section--about">
        <h2 className="values-section__heading">Our values</h2>
        <ol className="values-section__list" role="list">
          <li className="values-section__list-item" role="listitem">
            <div className="values-section__list-content">
              <img className="values-section__list-img" src={img01} alt="" />
              <span className="values-section__list-number list-number-one">
                01
              </span>
            </div>
            <h3 className="values-section__list-heading">Our tech</h3>
            <p className="values-section__list-text">
              We’re using cutting edge technology to drive accessible urban
              transportation forward. Our fully electric scooters are a joy to
              ride!
            </p>
          </li>
          <li className="values-section__list-item" role="listitem">
            <div className="values-section__list-content">
              <img className="values-section__list-img" src={img02} alt="" />
              <span className="values-section__list-number list-number-two">
                02
              </span>
            </div>
            <h3 className="values-section__list-heading">Our integrity</h3>
            <p className="values-section__list-text">
              We are fully committed to deliver a great yet safe, sustainable
              micro-mobility experience in every city we serve.
            </p>
          </li>
          <li className="values-section__list-item" role="listitem">
            <div className="values-section__list-content">
              <img className="values-section__list-img" src={img03} alt="" />
              <span className="values-section__list-number list-number-three">
                03
              </span>
            </div>
            <h3 className="values-section__list-heading">Our community</h3>
            <p className="values-section__list-text">
              We support every community we serve. All workers are paid a living
              wage based on their location and are Scoot employees.
            </p>
          </li>
        </ol>
      </section>
    </>
  );
}

export default Values;
