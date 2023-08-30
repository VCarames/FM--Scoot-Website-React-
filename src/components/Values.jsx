import valuesData from "/public/data/values";

function Values() {
  return (
    <>
      <section className="values-section values-section--about">
        <h2 className="values-section__heading">Our values</h2>
        <ol className="values-section__list" role="list">
          {valuesData.values.map((value) => (
            <li
              className="values-section__list-item"
              key={value.id}
              role="listitem"
            >
              <div className="values-section__list-content">
                <img
                  className="values-section__list-img"
                  src={value.image}
                  alt=""
                />
                <span className="values-section__list-number list-number-one">
                  {value.number}
                </span>
              </div>
              <h3 className="values-section__list-heading">{value.value}</h3>
              <p className="values-section__list-text">{value.details}</p>
            </li>
          ))}
        </ol>
      </section>
    </>
  );
}

export default Values;
