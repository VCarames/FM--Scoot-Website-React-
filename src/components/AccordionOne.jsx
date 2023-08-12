import Chevron from "/icons/chevron.svg";

function AccordionOne() {
  return (
    <>
      <div className="faqs-section__accordion accordion--how">
        <details className="accordion__details" open>
          <summary className="accordion__details-heading">
            <p>How do I download the app?</p>
            <img src={Chevron} alt="" />
          </summary>
          <p className="accordion__details-text">
            To download the Scoot app, you can search “Scoot” in both the App
            and Google Play stores. An even simpler way to do it would be to
            click the relevant link at the bottom of this page and you’ll be
            re-directed to the correct page.
          </p>
        </details>
        <details className="accordion__details">
          <summary className="accordion__details-heading">
            <p>Can I find a nearby Scoots?</p>
            <img src={Chevron} alt="" />
          </summary>
          <p className="accordion__details-text">
            Definitely! Simply open up the app and allow us to find your
            location while using it. We'll show you all of the closest Scoots
            and some extra useful information.
          </p>
        </details>
        <details className="accordion__details">
          <summary className="accordion__details-heading">
            <p>Do I need a license to ride?</p>
            <img src={Chevron} alt="" />
          </summary>
          <p className="accordion__details-text">
            Yup! We provide information inside the app regarding local laws and
            the license you need to be able to ride our Scoots.
          </p>
        </details>
      </div>
    </>
  );
}

export default AccordionOne;
