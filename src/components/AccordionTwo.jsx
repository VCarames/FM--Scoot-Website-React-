import Chevron from "/icons/chevron.svg";

function AccordionTwo() {
  return (
    <>
      <div className="faqs-section__content">
        <h3 className="faqs-section__content-heading">Safe driving</h3>
        <div className="faqs-section__accordion accordion--safe">
          <details className="accordion__details" open>
            <summary className="accordion__details-heading">
              <p>Should I wear a helmet?</p>
              <img src={Chevron} alt="" />
            </summary>
            <p className="accordion__details-text">
              Yes, please do! All cities have different laws. But we strongly
              strongly strongly recommend always wearing a helmet regardless of
              the local laws. We like you and we want you to be as safe as
              possible while Scooting.
            </p>
          </details>
          <details className="accordion__details">
            <summary className="accordion__details-heading">
              <p>How about the rules &amp; regulations?</p>
              <img src={Chevron} alt="" />
            </summary>
            <p className="accordion__details-text">
              Now is not the time to be a rule breaker. Be sure you're complying
              with all local laws and regulations. Also, just be a good human
              being. Be sure not to park your Scoot where it can block access to
              buildings or get in people's way.
            </p>
          </details>
          <details className="accordion__details">
            <summary className="accordion__details-heading">
              <p>What if I damage my Scoot?</p>
              <img src={Chevron} alt="" />
            </summary>
            <p className="accordion__details-text">
              Be sure to read our terms and conditions carefully. Not the most
              fun job we know but we make it as clear as possible. There's an
              option to add insurance for each trip, or you can sign up for
              annual insurance if you're a regular Scooter.
            </p>
          </details>
        </div>
      </div>
    </>
  );
}

export default AccordionTwo;
