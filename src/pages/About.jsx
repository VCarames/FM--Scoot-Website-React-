import CTA from "../components/CTA";
import Footer from "../components/Footer";
import Header from "../components/Header";

function About() {
  return (
    <>
      <Header />
      <main>
        <section className="intro-section intro-section__about">
          <div className="intro-section__content intro-section__content--about">
            <h1 className="intro-section__heading intro-section__heading--about">
              About
            </h1>
          </div>
        </section>

        <CTA />
      </main>
      <Footer />
    </>
  );
}

export default About;
