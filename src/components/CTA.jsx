import Apple from "/icons/app-store.svg";
import Android from "/icons/google-play.svg";

function CTA() {
  return (
    <>
      <section className="cta-section">
        <div className="cta-section__content">
          <h2 className="cta-section__heading">Sign up and Scoot off today</h2>
          <div className="cta-section__download-content">
            <a
              href="/"
              className="donwload download__apple"
              aria-label="Available in the AppStore"
            >
              <img className="" src={Apple} alt="" />
            </a>
            <a
              href="/"
              className="donwload download__android"
              aria-label="Get it on GooglePlay"
            >
              <img src={Android} alt="" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default CTA;
