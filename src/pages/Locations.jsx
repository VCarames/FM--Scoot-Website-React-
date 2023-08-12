import CTA from "../components/CTA";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Map from "../components/Map";

function Locations() {
  return (
    <>
      <Header />
      <main>
        <section className="intro-section intro-section__locations">
          <div className="intro-section__content intro-section__content--locations">
            <h1 className="intro-section__heading intro-section__heading--locations">
              Locations
            </h1>
          </div>
        </section>

        <section className="locations-section">
          <h2 className="visually-hidden">Our Locations</h2>

          <Map />
        </section>

        <section className="not-listed-section">
          <div className="not-listed-section__content">
            <h2 className="not-listed-section__heading">
              Your City Not Listed?
            </h2>
            <p className="not-listed-section__text">
              If you’d like to see Scoot in your hometown, be sure to let us
              know. We track requests and plan launches based on demand. Feel
              free to message us by clicking the link or messaging us on social.
            </p>
          </div>
          <a href="/" className="not-listed-section__btn button">
            Message Us
          </a>
        </section>

        <CTA />
      </main>
      <Footer />
    </>
  );
}

export default Locations;
