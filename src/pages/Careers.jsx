import BenefitsImgSix from "/src/assets/images/join-us.jpg";

import Header from "../components/Header";
import Values from "../components/Values";
import JobListings from "../components/JobListings";
import CTA from "../components/CTA";
import Footer from "../components/Footer";

function Careers() {
  return (
    <>
      <Header />
      <main>
        <section className="intro-section intro-section--careers">
          <div className="intro-section__content intro-section__content--careers">
            <h1 className="intro-section__heading intro-section__heading--careers">
              Careers
            </h1>
          </div>
        </section>

        <section className="benefits-section benefits-section--careers">
          <h2 className="visually-hidden">Join Us</h2>
          <div className="benefits-section__pattern benefits-section__pattern--six">
            <div className="benefits-section__content benefits-section__content--careers">
              <img
                className="benefits-section__img"
                src={BenefitsImgSix}
                alt=""
              />
              <div className="benefits-section__content-container benefits-section__content-inner--careers">
                <h3 className="benefits-section__heading">
                  Care to join our mission?
                </h3>
                <p className="benefits-section__text">
                  We’re always looking for ambitious individuals to help us on
                  our journey. If you’re passionate about our mission to provide
                  clean, accessible transport to improve urban living we want to
                  hear from you!
                </p>
                <a href="/" className="benefits-section__btn button">
                  Say Hello
                </a>
              </div>
            </div>
          </div>
        </section>

        <Values />
        <JobListings />
        <CTA />
      </main>
      <Footer />
    </>
  );
}

export default Careers;
