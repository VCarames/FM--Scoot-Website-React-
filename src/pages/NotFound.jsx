import Footer from "../components/Footer";
import Header from "../components/Header";

function NotFound() {
  return (
    <>
      <Header />

      <main>
        <section className="intro-section intro-section--404 ">
          <div className="intro-section__content intro-section__content--404 ">
            <h1 className="intro-section__heading ">
              <span>404</span> Something went wrong...
            </h1>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default NotFound;
