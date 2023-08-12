import CTA from "../components/CTA";
import Footer from "../components/Footer";
import Header from "../components/Header";

function Careers() {
  return (
    <>
      <Header />
      <main>
        <section className="intro-section intro-section__careers">
          <div className="intro-section__content intro-section__content--careers">
            <h1 className="intro-section__heading intro-section__heading--careers">
              Careers
            </h1>
          </div>
        </section>

        <CTA />
      </main>
      <Footer />
    </>
  );
}

export default Careers;
