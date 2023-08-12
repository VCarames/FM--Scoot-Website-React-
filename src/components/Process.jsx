import Icon01 from "/icons/locate.svg";
import Icon02 from "/icons/scooter.svg";
import Icon03 from "/icons/ride.svg";

function Process() {
  return (
    <>
      <section className="process-section">
        <h2 className="visually-hidden">How To Use</h2>
        <ol className="process-section__list" role="list">
          <li className="process-section__list-item" role="listitem">
            <img src={Icon01} alt="" />
            <div className="process-section__list-content">
              <h3 className="process-section__list-heading">Locate with app</h3>
              <p className="process-section__list-text">
                Use the app to find the nearest scooter to you. We are
                continuously placing scooters in the areas with most demand, so
                one should never be too far away.
              </p>
            </div>
          </li>
          <li className="process-section__list-item" role="listitem">
            <img src={Icon02} alt="" />
            <div className="process-section__list-content">
              <h3 className="process-section__list-heading">
                Pick your scooter
              </h3>
              <p className="process-section__list-text">
                We show the most important info for the scooters closest to you.
                So you know how much charge they have left and can see roughly
                how much it will cost.
              </p>
            </div>
          </li>
          <li className="process-section__list-item" role="listitem">
            <img src={Icon03} alt="" />
            <div className="process-section__list-content">
              <h3 className="process-section__list-heading">Enjoy the ride</h3>
              <p className="process-section__list-text">
                Scan the QR code and the bike will unlock. Retract the cable
                lock, put on a helmet, and you’re off! Always lock bikes away
                from walkways and accessibility ramps.
              </p>
            </div>
          </li>
        </ol>
      </section>
    </>
  );
}

export default Process;
