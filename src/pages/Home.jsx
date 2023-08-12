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

        <section className="benefits-section">
          <h2 className="visually-hidden">Why Use Sccot?</h2>
          <div className="benefits-section__pattern benefits-section__pattern--one">
            <div className="benefits-section__content">
              <img
                className="benefits-section__img"
                src="../src/assets/images/telemetry.jpg"
                alt=""
              />
              <div className="benefits-section__content-container">
                <h3 className="benefits-section__heading">
                  Easy to use riding telemetry
                </h3>
                <p className="benefits-section__text">
                  The Scoot app is available with riding telemetry. This means
                  it can show you your average speed, how long you've been using
                  the scooter, your traveling distance, and many more things all
                  in an easy to use app.
                </p>
                <a href="/" className="benefits-section__btn button">
                  Learn More
                </a>
              </div>
            </div>
          </div>
          <div className="benefits-section__pattern benefits-section__pattern--two">
            <div className="benefits-section__content benefits-section__content--alt">
              <img
                className="benefits-section__img"
                src="../src/assets/images/near-you.jpg"
                alt=""
              />
              <div className="benefits-section__content-container">
                <h3 className="benefits-section__heading">
                  Coming to a city near you
                </h3>
                <p className="benefits-section__text">
                  Scoot is available in 4 major cities so far. We’re expanding
                  rapidly, so be sure to let us know if you want to see us in
                  your hometown. We’re aiming to let our scooters loose on 23
                  cities over the coming year.
                </p>
                <a href="/" className="benefits-section__btn button">
                  Learn More
                </a>
              </div>
            </div>
          </div>
          <div className="benefits-section__pattern benefits-section__pattern--three">
            <div className="benefits-section__content">
              <img
                className="benefits-section__img"
                src="../src/assets/images/payments.jpg"
                alt=""
              />
              <div className="benefits-section__content-container">
                <h3 className="benefits-section__heading">
                  Zero hassle payments
                </h3>
                <p className="benefits-section__text">
                  Our payment is as easy as one two three. We accept most credit
                  cards and debit cards. You can also link your PayPal account
                  inside the app. Need to pay later? No worries! You can defer
                  payment for up to a month.
                </p>
                <a href="/" className="benefits-section__btn button">
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </section>

        <CTA />
      </main>
      <Footer />
    </>
  );
}

export default Home;
