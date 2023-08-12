import CTA from "../components/CTA";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Process from "../components/Process";

function Home() {
  return (
    <>
      <Header />
      <main>
        <section className="intro-section intro-section__hero">
          <div className="intro-section__content intro-section__content--hero">
            <h1 className="intro-section__heading intro-section__heading--hero">
              Scooter sharing made simple
            </h1>
            <div className="intro-section__container">
              <p className="intro-section__text">
                Scoot takes the hassle out of urban mobility. Our bikes are
                placed in convenient locations in each of our cities. Use our
                app to locate the nearest bike, unlock it with a tap, and you’re
                away!
              </p>
              <a href="/" className="intro-section__cta button">
                Get Scootin
              </a>
            </div>
          </div>
        </section>

        <Process />

        <CTA />
      </main>
      <Footer />
    </>
  );
}

export default Home;
