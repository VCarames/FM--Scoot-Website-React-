import { Link } from "react-router-dom";

function NotListed() {
  return (
    <section className="not-listed-section">
      <div className="not-listed-section__content">
        <h2 className="not-listed-section__heading">Your City Not Listed?</h2>
        <p className="not-listed-section__text">
          If you’d like to see Scoot in your hometown, be sure to let us know.
          We track requests and plan launches based on demand. Feel free to
          message us by clicking the link or messaging us on social.
        </p>
      </div>

      <Link to="/" className="not-listed-section__btn button">
        Message Us
      </Link>
    </section>
  );
}

export default NotListed;
