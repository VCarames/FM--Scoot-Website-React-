import BenefitsImgFour from "/src/assets/images/digital-era.jpg";
import BenefitsImgFive from "/src/assets/images/better-living.jpg";

import Header from "../components/Header";
import Values from "../components/Values";
import AccordionOne from "../components/AccordionOne";
import AccordionTwo from "../components/AccordionTwo";
import CTA from "../components/CTA";
import Footer from "../components/Footer";

function About() {
  return (
    <>
      <Header />
      <main>
        <section className="intro-section intro-section--about">
          <div className="intro-section__content intro-section__content--about">
            <h1 className="intro-section__heading intro-section__heading--about">
              About
            </h1>
          </div>
        </section>

        <section className="benefits-section benefits-section--about">
          <h2 className="visually-hidden">Benefits of Using Scoot</h2>
          <div className="benefits-section__pattern benefits-section__pattern--four">
            <div className="benefits-section__content">
              <img
                className="benefits-section__img"
                src={BenefitsImgFour}
                alt=""
              />
              <div className="benefits-section__content-container">
                <h3 className="benefits-section__heading">
                  Mobility for the digital era
                </h3>
                <p className="benefits-section__text">
                  Getting around should be simple (and even fun!) for everyone.
                  We embrace technology to provide low cost, smart access to
                  scooters at your fingertips.
                </p>
              </div>
            </div>
          </div>
          <div className="benefits-section__pattern benefits-section__pattern--five">
            <div className="benefits-section__content benefits-section__content--alt">
              <img
                className="benefits-section__img"
                src={BenefitsImgFive}
                alt=""
              />
              <div className="benefits-section__content-container">
                <h3 className="benefits-section__heading">
                  Better urban living
                </h3>
                <p className="benefits-section__text">
                  We’re helping connect cities and bring people closer together.
                  Our scooters are also fully-electric and we offset the minimal
                  carbon footprint for each ride.
                </p>
              </div>
            </div>
          </div>
        </section>

        <Values />

        <section className="faqs-section">
          <h2 className="faqs-section__heading">FAQs</h2>

          <AccordionOne />
          <AccordionTwo />
        </section>

        <CTA />
      </main>
      <Footer />
    </>
  );
}

export default About;
