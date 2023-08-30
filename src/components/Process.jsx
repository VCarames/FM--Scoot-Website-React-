import processData from "/public/data/process";

function Process() {
  return (
    <>
      <section className="process-section">
        <h2 className="visually-hidden">How To Use</h2>
        <ol className="process-section__list" role="list">
          {processData.process.map((processSteps) => (
            <li
              className="process-section__list-item"
              role="listitem"
              key={processSteps.id}
            >
              <img src={processSteps.icon} alt="" />
              <div className="process-section__list-content">
                <h3 className="process-section__list-heading">
                  {processSteps.step}
                </h3>
                <p className="process-section__list-text">
                  {processSteps.details}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </section>
    </>
  );
}

export default Process;
