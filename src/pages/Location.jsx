import CTA from "../components/CTA";
import Footer from "../components/Footer";
import Header from "../components/Header";

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

        <CTA />
      </main>
      <Footer />
    </>
  );
}

export default Locations;
